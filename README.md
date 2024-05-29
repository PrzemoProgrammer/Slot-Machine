<img align="right" alt="coding" src="https://media3.giphy.com/media/EahYBxGgJHLZ6/200w.gif?cid=6c09b952y26fk37rk4c5er8mewuzxw991fui6luu40ygeb82&ep=v1_gifs_search&rid=200w.gif&ct=g">

# Live Demo:
👉 https://przemoprogrammer.github.io/Slot-Machine/

# Slot Machine Game

-- CLIETN:-------
* 𝗣𝗶𝘅𝗶.𝗷𝘀 7.4
* 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀 18.2
* 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁
* 𝗷𝘄𝘁-𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻: registration and login
* 𝐇𝐨𝐰𝐥𝐞𝐫 for audio
* 𝗚𝘀𝗮𝗽 for animations
* 𝗠𝗼𝗱𝗲𝗹-𝗩𝗶𝗲𝘄-𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗿: architectural pattern
  
-- SERVER:-------
* 𝗡𝗼𝗱𝗲.𝗷𝘀
* 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀
* 𝗦𝗼𝗰𝗸𝗲𝘁.𝗶𝗼
* 𝗠𝗼𝗻𝗴𝗼𝗱𝗯 database 
* 𝗣𝗮𝘆𝗣𝗮𝗹 payment method implemented


𝐕𝐢𝐝𝐞𝐨

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/J_jCSIwpFmQ/0.jpg)](https://www.youtube.com/watch?v=J_jCSIwpFmQ)


# CODE STRUCTURE

```
src
├─ App.css
├─ App.jsx
├─ components
│  ├─ closeButton
│  │  ├─ CloseButton.jsx
│  │  └─ CSS
│  │     └─ CloseButton.css
│  ├─ textureButton
│  │  ├─ CSS
│  │  │  └─ TextureButton.css
│  │  └─ TextureButton.jsx
│  └─ UISvgButton
│     ├─ CSS
│     │  └─ UISvgButton.css
│     └─ UISvgButton.jsx
├─ componentsContextRefs
│  └─ ComponentsContextRefsStorage.js
├─ config
│  ├─ appConfig.ts
│  ├─ assetsConfig.js
│  └─ screenConfig.js
├─ game
│  ├─ abstraction
│  │  └─ BaseScene.ts
│  ├─ background
│  │  ├─ config
│  │  │  └─ backgroundConfig.ts
│  │  ├─ controller
│  │  │  └─ BackgroundController.ts
│  │  ├─ GameBackground.ts
│  │  ├─ interface
│  │  │  └─ IBackgroundConfig.ts
│  │  ├─ model
│  │  │  ├─ BackgroundModel.ts
│  │  │  └─ interface
│  │  │     └─ IBackgroundModelConfig.ts
│  │  └─ view
│  │     ├─ BackgroundView.ts
│  │     └─ interface
│  │        └─ IBackgroundViewConfig.ts
│  ├─ components
│  │  ├─ animatedSprite
│  │  │  ├─ AnimatedSprite.ts
│  │  │  └─ interface
│  │  │     └─ IAnimatedSpriteConfig.ts
│  │  ├─ atlasSprite
│  │  │  ├─ AtlasSprite.ts
│  │  │  └─ interface
│  │  │     └─ IAtlasSpriteConfig.ts
│  │  ├─ button
│  │  │  ├─ Button.ts
│  │  │  └─ interface
│  │  │     └─ IButtonConfig.ts
│  │  ├─ Container.ts
│  │  ├─ graphics
│  │  │  ├─ Graphics.ts
│  │  │  └─ interface
│  │  │     └─ IGraphicsConfig.ts
│  │  ├─ spineAnimation
│  │  │  ├─ interface
│  │  │  │  └─ ISpineAnimationConfig.ts
│  │  │  └─ SpineAnimation.ts
│  │  ├─ sprite
│  │  │  ├─ interface
│  │  │  │  └─ ISpriteConfig.ts
│  │  │  └─ Sprite.ts
│  │  └─ text
│  │     ├─ interface
│  │     │  └─ ITextConfig.ts
│  │     └─ Text.ts
│  ├─ config
│  │  └─ gameConfig.ts
│  ├─ creditsCounter
│  │  ├─ controller
│  │  │  └─ CreditsCounterController.ts
│  │  ├─ CreditsCounter.ts
│  │  ├─ model
│  │  │  └─ CreditsCounterModel.ts
│  │  └─ view
│  │     └─ CreditsCounterView.ts
│  ├─ CSS
│  │  └─ Game.css
│  ├─ darkScreen
│  │  ├─ config
│  │  │  └─ darkScreenConfig.ts
│  │  ├─ controller
│  │  │  └─ DarkScreenController.ts
│  │  ├─ DarkScreen.ts
│  │  ├─ interface
│  │  │  └─ IDarkScreenConfig.ts
│  │  ├─ model
│  │  │  ├─ DarkScreenModel.ts
│  │  │  └─ interface
│  │  │     └─ IDarkScreenlConfig.ts
│  │  └─ view
│  │     ├─ DarkScreenView.ts
│  │     └─ interface
│  │        └─ IDarkScreenConfig.ts
│  ├─ game
│  │  ├─ bet
│  │  │  ├─ Bet.ts
│  │  │  └─ interface
│  │  │     └─ IBetConfig.ts
│  │  ├─ card
│  │  │  ├─ Card.ts
│  │  │  └─ config
│  │  │     └─ cardAnimsConfig.ts
│  │  ├─ config
│  │  │  └─ gameConfig.ts
│  │  ├─ interface
│  │  │  ├─ IPlayerGamePositions.ts
│  │  │  └─ IPlayerPositionsConfig.ts
│  │  ├─ players
│  │  │  ├─ interface
│  │  │  │  └─ IPlayersConfig.ts
│  │  │  ├─ manager
│  │  │  │  └─ PlayersManager.ts
│  │  │  ├─ player
│  │  │  │  ├─ cards
│  │  │  │  │  └─ PlayerCards.ts
│  │  │  │  ├─ config
│  │  │  │  │  └─ playerConfig.ts
│  │  │  │  ├─ interface
│  │  │  │  │  └─ IPlayerConfig.ts
│  │  │  │  ├─ moneyText
│  │  │  │  │  └─ MoneyText.ts
│  │  │  │  ├─ Player.ts
│  │  │  │  ├─ timer
│  │  │  │  │  ├─ interface
│  │  │  │  │  │  └─ ITimerConfig.ts
│  │  │  │  │  └─ Timer.ts
│  │  │  │  └─ view
│  │  │  │     └─ PlayerView.ts
│  │  │  └─ storage
│  │  │     ├─ interface
│  │  │     │  └─ IPlayersDataStorage.ts
│  │  │     └─ PlayersStorage.ts
│  │  └─ table
│  │     ├─ adapter
│  │     │  └─ TableAdapter.ts
│  │     ├─ bets
│  │     │  └─ config
│  │     │     └─ tableBetsConfig.ts
│  │     ├─ cards
│  │     │  ├─ config
│  │     │  │  └─ tableCardsConfig.ts
│  │     │  ├─ interface
│  │     │  │  └─ ITableCardsConfig.ts
│  │     │  └─ TableCards.ts
│  │     ├─ config
│  │     │  └─ tableConfig.ts
│  │     ├─ interface
│  │     │  └─ ITableConfig.ts
│  │     ├─ manager
│  │     │  └─ TableManager.ts
│  │     └─ view
│  │        └─ TableView.ts
│  ├─ gameLogo
│  │  ├─ config
│  │  │  └─ gameLogoConfig.ts
│  │  ├─ controller
│  │  │  └─ GameLogoController.ts
│  │  ├─ GameLogo.ts
│  │  ├─ interface
│  │  │  └─ IGameLogoConfig.ts
│  │  ├─ model
│  │  │  ├─ GameLogoModel.ts
│  │  │  └─ interface
│  │  │     └─ IGameLogoModelConfig.ts
│  │  └─ view
│  │     ├─ GameLogoView.ts
│  │     └─ interface
│  │        └─ IGameLogoConfig.ts
│  ├─ machine
│  │  ├─ config
│  │  │  ├─ machineConfig.ts
│  │  │  ├─ symbolDescriptions.ts
│  │  │  └─ symbolTypes.ts
│  │  ├─ controller
│  │  │  ├─ interface
│  │  │  │  └─ IMachineControllerConfig.ts
│  │  │  └─ MachineController.ts
│  │  ├─ creditsCounter
│  │  │  ├─ controller
│  │  │  │  └─ CreditsCounterController.ts
│  │  │  ├─ CreditsCounter.ts
│  │  │  ├─ model
│  │  │  │  └─ CreditsCounterModel.ts
│  │  │  └─ view
│  │  │     └─ CreditsCounterView.ts
│  │  ├─ describeLabel
│  │  │  ├─ controller
│  │  │  │  └─ DescribeLabelController.ts
│  │  │  ├─ DescribeLabel.ts
│  │  │  ├─ model
│  │  │  │  └─ DescribeLabelModel.ts
│  │  │  └─ view
│  │  │     └─ DescribeLabelView.ts
│  │  ├─ Machine.ts
│  │  ├─ matchFrame
│  │  │  ├─ controller
│  │  │  │  └─ MatchFrameController.ts
│  │  │  ├─ MatchFrame.ts
│  │  │  ├─ model
│  │  │  │  └─ MatchFrameModel.ts
│  │  │  └─ view
│  │  │     └─ MatchFrameView.ts
│  │  ├─ matchLine
│  │  │  ├─ controller
│  │  │  │  └─ MatchLineController.ts
│  │  │  ├─ MatchLine.ts
│  │  │  ├─ model
│  │  │  │  └─ MatchLineModel.ts
│  │  │  └─ view
│  │  │     └─ MatchLineView.ts
│  │  ├─ model
│  │  │  └─ MachineModel.ts
│  │  ├─ reel
│  │  │  ├─ controller
│  │  │  │  └─ ReelController.ts
│  │  │  ├─ model
│  │  │  │  └─ ReelModel.ts
│  │  │  ├─ Reel.ts
│  │  │  ├─ symbol
│  │  │  │  ├─ config
│  │  │  │  │  └─ symbolConfig.ts
│  │  │  │  ├─ controller
│  │  │  │  │  └─ SymbolController.ts
│  │  │  │  ├─ interface
│  │  │  │  │  └─ ISymbolConfig.ts
│  │  │  │  ├─ model
│  │  │  │  │  ├─ interface
│  │  │  │  │  │  └─ ISymbolModelConfig.ts
│  │  │  │  │  └─ SymbolModel.ts
│  │  │  │  ├─ Symbol.ts
│  │  │  │  └─ view
│  │  │  │     ├─ interface
│  │  │  │     │  └─ ISymbolViewConfig.ts
│  │  │  │     └─ SymbolView.ts
│  │  │  ├─ symbolsStorage
│  │  │  │  └─ SymbolsStorage.ts
│  │  │  └─ view
│  │  │     └─ ReelView.ts
│  │  ├─ reelsStorage
│  │  │  ├─ interface
│  │  │  │  └─ ISymbolsStorageConfig.ts
│  │  │  └─ ReelsStorage.ts
│  │  └─ view
│  │     ├─ interface
│  │     │  └─ IMachineViewConfig.ts
│  │     └─ MachineView.ts
│  ├─ main.js
│  ├─ manager
│  │  └─ GameManager.ts
│  ├─ PixiGame.jsx
│  ├─ scenes
│  │  ├─ Game.ts
│  │  └─ Preload.ts
│  └─ StartGame.js
├─ gameSignals
│  └─ GameSignals.js
├─ index.css
├─ interfaces
│  ├─ IAllPlayerJoinedServerData.ts
│  ├─ ICardData.ts
│  ├─ IGameResultData.ts
│  ├─ ILoginScreenConfig.ts
│  ├─ INextRoundData.ts
│  ├─ IPlayersBets.ts
│  ├─ IPlayersCards.ts
│  ├─ IPlayersMoney.ts
│  ├─ IPlayerTurnAction.ts
│  ├─ IPlayerTurnData.ts
│  ├─ IRegisterScreenConfig.ts
│  ├─ IServerPlayerData.ts
│  └─ IUpdatePlayerTurnAction.ts
├─ main.jsx
├─ managers
│  ├─ AppManager.js
│  ├─ AudioManager.ts
│  ├─ ImageManager.js
│  └─ SceneManager.ts
├─ pages
│  ├─ background
│  │  ├─ Background.jsx
│  │  └─ CSS
│  │     └─ Background.css
│  ├─ CSS
│  │  └─ Pages.css
│  ├─ gameInformation
│  │  ├─ CSS
│  │  │  └─ GameInformation.css
│  │  ├─ GameInformation.jsx
│  │  └─ symbolDescription
│  │     ├─ CSS
│  │     │  └─ SymbolDescription.css
│  │     └─ SymbolDescription.jsx
│  ├─ loadingGame
│  │  ├─ CSS
│  │  │  └─ LoadingGame.css
│  │  └─ LoadingGame.jsx
│  ├─ loadingScreen
│  │  ├─ CSS
│  │  │  └─ LoadingScreen.css
│  │  └─ LoadingScreen.jsx
│  ├─ loginScreen
│  │  ├─ CSS
│  │  │  └─ LoginScreen.css
│  │  └─ LoginScreen.jsx
│  ├─ manager
│  │  └─ PagesManager.js
│  └─ Pages.jsx
├─ services
│  ├─ config.ts
│  ├─ requests
│  │  ├─ config
│  │  │  └─ config.ts
│  │  ├─ helper
│  │  │  └─ helper.ts
│  │  └─ requests.ts
│  └─ webSocket
│     └─ SocketClient.ts
├─ storage
│  ├─ AppStorage.js
│  ├─ AudioStorage.ts
│  ├─ ImageStorage.js
│  └─ SceneStorage.js
├─ UI
│  ├─ bottomBar
│  │  ├─ balance
│  │  │  ├─ Balance.jsx
│  │  │  └─ CSS
│  │  │     └─ Balance.css
│  │  ├─ betLabel
│  │  │  ├─ BetLabel.jsx
│  │  │  └─ CSS
│  │  │     └─ BetLabel.css
│  │  ├─ BottomBar.jsx
│  │  ├─ CSS
│  │  │  └─ BottomBar.css
│  │  ├─ options
│  │  │  ├─ CSS
│  │  │  │  └─ Options.css
│  │  │  └─ Options.jsx
│  │  └─ spinButton
│  │     ├─ CSS
│  │     │  └─ SpinButton.css
│  │     └─ SpinButton.jsx
│  ├─ CSS
│  │  └─ UI.css
│  ├─ manager
│  │  └─ UIManager.js
│  ├─ middleBar
│  │  ├─ CSS
│  │  │  └─ MiddleBar.css
│  │  └─ MiddleBar.jsx
│  ├─ topBar
│  │  ├─ CSS
│  │  │  └─ TopBar.css
│  │  └─ TopBar.jsx
│  └─ UI.jsx
└─ utility
   ├─ formatNumber.js
   ├─ math
   │  └─ MathUtils.ts
   ├─ screen
   │  ├─ checkIsPortraitOrientation.js
   │  └─ ScreenUtils.js
   └─ unformatNumber.js

```
