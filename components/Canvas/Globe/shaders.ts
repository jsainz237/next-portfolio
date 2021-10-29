// @ts-expect-error
import glsl from 'glslify';

/** @see https://www.youtube.com/watch?v=vM8M4QloVL0 */

export const vertex = glsl(`
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
        vertexUV = uv;
        vertexNormal = normalize(normalMatrix * normal);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`);

export const fragment = glsl(`
    uniform sampler2D globeTexture;
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
        float intensity = 1.05 - dot(vertexNormal, vec3(0, 0, 0.8));
        vec3 atmosphere = vec3(0.117, 0.149, 0.184) * pow(intensity, 10.0);

        gl_FragColor = vec4(atmosphere + 
            texture2D(globeTexture, vertexUV).xyz,
            1.0
        );
    }
`);