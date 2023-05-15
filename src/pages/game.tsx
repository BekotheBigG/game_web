
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebGl.loader.js",
    dataUrl: "build/WebGl.data",
    frameworkUrl: "build/WebGl.framework.js",
    codeUrl: "build/WebGl.wasm",
  });

  return <Unity style={{ width:"100%", justifySelf:"center", alignSelf:"center"}} unityProvider={unityProvider} />;
}
