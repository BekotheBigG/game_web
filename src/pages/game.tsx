
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WEBGL.loader.js",
    dataUrl: "build/WEBGL.data",
    frameworkUrl: "build/WEBGL.framework.js",
    codeUrl: "build/WEBGL.wasm",
  });

  return <Unity style={{ width:"100%", justifySelf:"center", alignSelf:"center"}} unityProvider={unityProvider} />;
}
