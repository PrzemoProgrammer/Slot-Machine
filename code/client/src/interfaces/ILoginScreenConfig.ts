import IDefaultSpriteConfig from "../components/sprite/interface/IDefaultSpriteConfig";
import ITextInputConfig from "../components/textInput/interface/ITextInputConfig";
import IButtonConfig from "../components/button/interface/IButtonConfig";
import ITextConfig from "../components/text/interface/ITextConfig";

export default interface ILoginScreenConfig {
    background: IDefaultSpriteConfig,
    usernameTextInputConfig: ITextInputConfig
    passwordTextInputConfig: ITextInputConfig
    loginButtonConfig: IButtonConfig
    registerButtonConfig: IButtonConfig
    usernameText: ITextConfig
    passwordText:ITextConfig
  }

