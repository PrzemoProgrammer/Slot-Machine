<img align="right" alt="coding" src="https://media3.giphy.com/media/EahYBxGgJHLZ6/200w.gif?cid=6c09b952y26fk37rk4c5er8mewuzxw991fui6luu40ygeb82&ep=v1_gifs_search&rid=200w.gif&ct=g">

# Live Demo:


# Slot Machine Game
* Created in 𝗣𝗶𝘅𝗶.𝗷𝘀,
* 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁,
* Registration and login, 𝗷𝘄𝘁-𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻,
* 𝗣𝗮𝘆𝗣𝗮𝗹 payment method implemented,
* Server enviroment 𝗡𝗼𝗱𝗲.𝗷𝘀
* 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀 library used,
* 𝗠𝗼𝗻𝗴𝗼𝗱𝗯 database used
* 𝐇𝐨𝐰𝐥𝐞𝐫 for audio,
* 𝗚𝘀𝗮𝗽 for animations
* Architectural Pattern: 𝗠𝗼𝗱𝗲𝗹-𝗩𝗶𝗲𝘄-𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗿

𝐕𝐢𝐝𝐞𝐨

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Gv7AayuDGc0/0.jpg)](https://www.youtube.com/watch?v=Gv7AayuDGc0)


# CODE STRUCTURE

```
src
├─ abstraction
│  └─ BaseScene.ts
├─ Background.ts
├─ components
│  ├─ animatedSprite
│  │  ├─ AnimatedSprite.ts
│  │  └─ interface
│  │     └─ IAnimatedSpriteConfig.ts
│  ├─ atlasSprite
│  │  ├─ AtlasSprite.ts
│  │  └─ interface
│  │     └─ IAtlasSpriteConfig.ts
│  ├─ button
│  │  ├─ Button.ts
│  │  └─ interface
│  │     └─ IButtonConfig.ts
│  ├─ Container.ts
│  ├─ graphics
│  │  ├─ Graphics.ts
│  │  └─ interface
│  │     └─ IGraphicsConfig.ts
│  ├─ sprite
│  │  ├─ interface
│  │  │  └─ ISpriteConfig.ts
│  │  └─ Sprite.ts
│  └─ text
│     ├─ interface
│     │  └─ ITextConfig.ts
│     └─ Text.ts
├─ config
│  ├─ appConfig.ts
│  ├─ assetsConfig.ts
│  └─ screenConfig.ts
├─ game
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
│  ├─ machine
│  │  ├─ config
│  │  │  ├─ machineConfig.ts
│  │  │  └─ symbolTypes.ts
│  │  ├─ controller
│  │  │  ├─ interface
│  │  │  │  └─ IMachineControllerConfig.ts
│  │  │  └─ MachineController.ts
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
│  └─ manager
│     └─ GameManager.ts
├─ gameSignals
│  └─ GameSignals.ts
├─ ImageTest.ts
├─ index.ejs
├─ index.ts
├─ managers
│  ├─ AppManager.ts
│  ├─ AudioManager.ts
│  ├─ ImageManager.ts
│  └─ SceneManager.ts
├─ scenes
│  ├─ PlayScene.ts
│  ├─ PreloadScene.ts
│  └─ SocketConnectScene.ts
├─ services
│  ├─ config.ts
│  ├─ requests
│  │  ├─ config
│  │  │  └─ requestConfig.ts
│  │  ├─ helper
│  │  │  └─ helper.ts
│  │  └─ requests.ts
│  └─ webSocket
│     └─ SocketClient.ts
├─ storage
│  ├─ AppStorage.ts
│  ├─ AudioStorage.ts
│  ├─ ImageStorage.ts
│  └─ SceneStorage.ts
├─ UI
│  ├─ betLabel
│  │  ├─ balance
│  │  │  ├─ Balance.ts
│  │  │  ├─ controller
│  │  │  │  └─ BalanceController.ts
│  │  │  ├─ model
│  │  │  │  └─ BalanceModel.ts
│  │  │  └─ view
│  │  │     └─ BalanceView.ts
│  │  ├─ BetLabel.ts
│  │  ├─ config
│  │  ├─ controller
│  │  │  └─ BetLabelController.ts
│  │  ├─ model
│  │  │  └─ BetLabelModel.ts
│  │  ├─ totalBet
│  │  │  ├─ controller
│  │  │  │  └─ TotalBetController.ts
│  │  │  ├─ model
│  │  │  │  └─ TotalBetModel.ts
│  │  │  ├─ TotalBet.ts
│  │  │  └─ view
│  │  │     └─ TotalBetView.ts
│  │  └─ view
│  │     └─ BetLabelView.ts
│  └─ spinButton
│     ├─ config
│     │  └─ spinButtonConfig.ts
│     ├─ controller
│     │  └─ SpinButtonController.ts
│     ├─ interface
│     ├─ model
│     │  └─ SpinButtonModel.ts
│     ├─ SpinButton.ts
│     └─ view
│        └─ SpinButtonView.ts
└─ utility
   ├─ math
   │  └─ MathUtils.ts
   └─ screen
      └─ ScreenUtils.ts

```
