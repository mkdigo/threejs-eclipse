uniform sampler2D globeTexture;
uniform float innerRadius;
uniform float outerRadius;

varying vec3 vertexPosition;

vec4 color() {
  vec2 uv = vec2(0);
  uv.x = (length(vertexPosition) - innerRadius) / (outerRadius - innerRadius);
  if (uv.x < 0.0 || uv.x > 1.0) {
    discard;
  }
  
    vec4 pixel = texture2D(globeTexture, uv);
  return pixel;
}

void main() {
  gl_FragColor = color();
}