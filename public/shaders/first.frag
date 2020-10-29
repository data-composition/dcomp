#ifdef GL_ES
precision mediump float;
#endif


uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 xy = uv - 0.5;
    float rad = length(xy);
    float ang = atan(xy.x * 0.1, xy.y);
    vec2 xy_final = vec2(rad*3.0 + iTime, (0.6/ang) + iTime);
    vec4 col = texture2D(iChannel0, xy_final);
    col *= 0.3/rad;
    fragColor = col;
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}