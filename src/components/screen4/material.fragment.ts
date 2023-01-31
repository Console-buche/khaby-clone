export const wallOfTextFragment = `
varying vec2 vUv;  
uniform sampler2D Mask;
uniform float time;

void main() {
  vec4 maskTexture = texture2D(Mask, vUv);

    gl_FragColor = vec4(1.);
    gl_FragColor -= maskTexture;
}`;
