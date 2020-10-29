precision mediump float;

//uniforms
uniform float iTime;
// uniform float iFrame;
uniform vec2 iResolution;


const int MAX_STEPS = 200;
const float MAX_DIST = 500.;
const float SURF_DIST = 0.001;
const float NORMAL_DIST = 0.05;
const float SHININESS = 2.;
const float PI = 3.14159;

float time; 
vec2 uv;
vec2 lightOffset; 
vec3 lightPos;

float rayLength;
float closestDist;
float hitDist;
vec3 hit;
vec3 intersect;

mat2 rotate(float a){
    float c = cos(a);
    float s = sin(a);
    return mat2(c,-s,s,c);
}

float sdRoundBox( vec3 p, vec3 b, float r )
{
    vec3 q = abs(p) - b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}

float sdSphere(vec3 p, float radius)
{
    return length(p)-radius;
}

float sdf(vec3 p){ 
    p.y = 1.-abs(p.y);
    float wave = .15*sin(p.x*-0.05+p.z+p.z*13.15+p.y+time);    
    return p.y+5.+wave;
}

float rayMarch(vec3 ro, vec3 rd) 
{
    float dO=0.;
    for(int i=0; i<MAX_STEPS; i++) {
        vec3 p = ro + rd*dO;
        float dS = sdf(p);
        closestDist = min(dS, closestDist);
        dO += dS;
        if(dO>MAX_DIST || dS<SURF_DIST) break;
    }
    return dO;
}

vec3 normal(vec3 p) 
{
    float d = sdf(p);
    vec2 e = vec2(NORMAL_DIST, 0);
    vec3 n = d - vec3(
        sdf(p-e.xyy),
        sdf(p-e.yxy),
        sdf(p-e.yyx));
    return normalize(n);
}

float diffuseLight(vec3 p, vec3 normal) 
{
    vec3 l = normalize(lightPos-p);
    float dif = clamp(dot(normal, l), 0., 1.);
    float d = rayMarch(p+normal*SURF_DIST*2., l);
    if(d<length(lightPos-p)){ dif *= .1; }
    return dif;
}


float specularLight(vec3 p, vec3 rayDir, vec3 normal) {
    vec3 lightDir = normalize(p-lightPos);
    vec3 reflectionDirection = reflect(-lightDir, normal);
    float specularAngle = max(dot(reflectionDirection, rayDir), 0.);
    return pow(specularAngle, SHININESS);
}

float render(vec2 uv)
{
    vec3 rayOrigin = vec3(uv*0.1, 0);
    vec3 rayDir = normalize(vec3(uv.x, uv.y, 1.));
    hitDist = rayMarch(rayOrigin, rayDir);
    hit = rayOrigin + rayDir * hitDist;
    vec3 normal = normal(hit);
    float diff = diffuseLight(hit, normal);   
    float spec = specularLight(hit, rayDir, normal);
    return .5*diff + .5*spec;
}

vec3 gammaCorrection(vec3 rgb){
    float gamma = 2.2;
    rgb = smoothstep(0., 1., rgb);
    return pow(max(rgb, 0.), vec3(1.0/gamma));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    time = float(iTime)*.0025;
    lightPos = vec3(0,10,1000);
    uv = (fragCoord-.5*iResolution.xy)/iResolution.y;
    float lit = render(uv);
    lit *= smoothstep(MAX_DIST, MAX_DIST*.1, hitDist);
    fragColor = vec4(gammaCorrection(vec3(lit)),1.0);
}
void main(void){
    mainImage(gl_FragColor, gl_FragCoord.xy);
}