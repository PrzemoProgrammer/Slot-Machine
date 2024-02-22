<img align="right" alt="coding" src="https://media3.giphy.com/media/EahYBxGgJHLZ6/200w.gif?cid=6c09b952y26fk37rk4c5er8mewuzxw991fui6luu40ygeb82&ep=v1_gifs_search&rid=200w.gif&ct=g">

# Live Demo:
👉 https://przemoprogrammer.github.io/Slot-Machine/

# Slot Machine Game

-- CLIETN:-------
* 𝗣𝗶𝘅𝗶.𝗷𝘀
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

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/1-y1geAYyRc/0.jpg)](https://www.youtube.com/watch?v=Gv7AayuDGc0)


# CODE STRUCTURE
```
src
├─ abstraction
│  └─ BaseScene.ts
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
│  ├─ spineAnimation
│  │  ├─ interface
│  │  │  └─ ISpineAnimationConfig.ts
│  │  └─ SpineAnimation.ts
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
│  │  │  ├─ symbolDescriptions.ts
│  │  │  └─ symbolTypes.ts
│  │  ├─ controller
│  │  │  ├─ interface
│  │  │  │  └─ IMachineControllerConfig.ts
│  │  │  └─ MachineController.ts
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
├─ index.ejs
├─ index.ts
├─ managers
│  ├─ AppManager.ts
│  ├─ AudioManager.ts
│  ├─ ImageManager.ts
│  ├─ SceneManager.ts
│  └─ UIManager.ts
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
│  ├─ SceneStorage.ts
│  └─ UIStorage.ts
├─ UI
│  ├─ bottomBar
│  │  ├─ betLabel
│  │  │  ├─ betLabel
│  │  │  │  ├─ BetLabel.ts
│  │  │  │  ├─ buttonDown
│  │  │  │  │  ├─ ButtonDown.ts
│  │  │  │  │  ├─ controller
│  │  │  │  │  │  └─ ButtonDownController.ts
│  │  │  │  │  └─ view
│  │  │  │  │     └─ ButtonDownView.ts
│  │  │  │  ├─ buttonUp
│  │  │  │  │  ├─ ButtonUp.ts
│  │  │  │  │  ├─ controller
│  │  │  │  │  │  └─ ButtonUpController.ts
│  │  │  │  │  └─ view
│  │  │  │  │     └─ ButtonUpView.ts
│  │  │  │  ├─ content
│  │  │  │  │  ├─ background
│  │  │  │  │  │  ├─ Background.ts
│  │  │  │  │  │  ├─ controller
│  │  │  │  │  │  │  └─ BackgroundController.ts
│  │  │  │  │  │  └─ view
│  │  │  │  │  │     └─ BackgroundView.ts
│  │  │  │  │  ├─ Content.ts
│  │  │  │  │  ├─ controller
│  │  │  │  │  │  └─ ContentController.ts
│  │  │  │  │  ├─ text
│  │  │  │  │  │  ├─ balance
│  │  │  │  │  │  │  ├─ Balance.ts
│  │  │  │  │  │  │  ├─ controller
│  │  │  │  │  │  │  │  └─ BalanceController.ts
│  │  │  │  │  │  │  ├─ model
│  │  │  │  │  │  │  │  └─ BalanceModel.ts
│  │  │  │  │  │  │  └─ view
│  │  │  │  │  │  │     └─ BalanceView.ts
│  │  │  │  │  │  ├─ controller
│  │  │  │  │  │  │  └─ TextController.ts
│  │  │  │  │  │  ├─ Text.ts
│  │  │  │  │  │  ├─ totalBet
│  │  │  │  │  │  │  ├─ controller
│  │  │  │  │  │  │  │  └─ TotalBetController.ts
│  │  │  │  │  │  │  ├─ model
│  │  │  │  │  │  │  │  └─ TotalBetModel.ts
│  │  │  │  │  │  │  ├─ TotalBet.ts
│  │  │  │  │  │  │  └─ view
│  │  │  │  │  │  │     └─ TotalBetView.ts
│  │  │  │  │  │  └─ view
│  │  │  │  │  │     └─ TextView.ts
│  │  │  │  │  └─ view
│  │  │  │  │     └─ ContentView.ts
│  │  │  │  ├─ controller
│  │  │  │  │  └─ BetLabelController.ts
│  │  │  │  └─ view
│  │  │  │     └─ BetLabelView.ts
│  │  │  ├─ BetLabelContainer.ts
│  │  │  ├─ config
│  │  │  ├─ controller
│  │  │  │  └─ BetLabelContainerController.ts
│  │  │  ├─ model
│  │  │  │  └─ BetLabelContainerModel.ts
│  │  │  └─ view
│  │  │     └─ BetLabelContainerView.ts
│  │  ├─ BottomBar.ts
│  │  ├─ controller
│  │  │  └─ BottomBarController.ts
│  │  ├─ spinButton
│  │  │  ├─ controller
│  │  │  │  └─ SpinButtonController.ts
│  │  │  ├─ interface
│  │  │  ├─ model
│  │  │  │  └─ SpinButtonModel.ts
│  │  │  ├─ SpinButton.ts
│  │  │  └─ view
│  │  │     └─ SpinButtonView.ts
│  │  └─ view
│  │     └─ BottomBarView.ts
│  ├─ config
│  │  └─ config.ts
│  └─ manager
│     └─ GUIManager.ts
└─ utility
   ├─ math
   │  └─ MathUtils.ts
   └─ screen
      └─ ScreenUtils.ts
```
