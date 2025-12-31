import IDefaultSpriteConfig from "../components/sprite/interface/IDefaultSpriteConfig";
import ITextInputConfig from "../components/textInput/interface/ITextInputConfig";
import IButtonConfig from "../components/button/interface/IButtonConfig";
import ITextConfig from "../components/text/interface/ITextConfig";

export default interface IRegisterScreenConfig {
    background: IDefaultSpriteConfig,
    usernameTextInputConfig: ITextInputConfig
    passwordTextInputConfig: ITextInputConfig
    nicknameTextInputConfig: ITextInputConfig
    registerButtonConfig: IButtonConfig
    backButtonConfig: IButtonConfig
    usernameText: ITextConfig
    passwordText:ITextConfig
    nicknameText:ITextConfig
  }

