export const wallOfTextFragment = `
varying vec2 vUv;  
uniform sampler2D Mask;
uniform float time;

void main() {
  vec4 maskTexture = texture2D(Mask, vUv);

float red = sin(time + vUv.y);
    gl_FragColor = vec4(1.);
    float spot = sin(time + vUv.y + maskTexture.r;
  gl_FragColor -= vec4(spot,spot,spot, maskTexture.a);
//   gl_FragColor = vec4(red, 0.,0., 1.0); 
}`;
