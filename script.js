.use-keyboard-input {
    display: block;
    width: 90%;
    margin: 60px auto;
    padding: 10px;
    font-size: 20px;
    height: calc(100vh - 380px);
    min-height: 300px;
  }
  
  .sound_btn{
    right:0;
    top:0;
    border: none; outline: none;
    background-size: contain;
    width: 30px;
    height: 30px;
    position: absolute;
  }
  
  .keyboard {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
    background: #004134;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    user-select: none;
    transition: bottom 0.4s;
  }
  
  .keyboard--hidden {
    bottom: -100%;
  }
  
  .keyboard__keys {
    text-align: center;
  }
  
  .keyboard__key {
    height: 45px;
    width: 6%;
    max-width: 90px;
    margin: 3px;
    border-radius: 4px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 1.05rem;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    position: relative;
  }
  
  .keyboard__key:active {
    background: rgba(255, 255, 255, 0.12);
  }
  
  .keyboard__key--wide {
    width: 12%;
  }
  
  .keyboard__key--extra-wide {
    width: 36%;
    max-width: 500px;
  }
  
  .keyboard__key--activatable::after {
    content: '';
    top: 10px;
    right: 10px;
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
  
  .keyboard__key--active::after {
    background: #08ff00;
  }
  
  .keyboard__key--dark {
    background: rgba(0, 0, 0, 0.25);
  }
  
  .keyboard__key--lighting{
    background: #08ff00;
    color: #004134;
  }
  
  @media (max-width: 770px){
    .keyboard__key--wide {
      width: 8%;
    }
    
    .keyboard__key--extra-wide {
      width: 26%;
      max-width: 350px;
    }
  
    .keyboard__key {
      font-size: 14px;
    }
  
    .keyboard__key--activatable::after {
      top: 35px;
      right: 5px;
      position: absolute;
      width: 6px;
      height: 6px;
    }
  }
  
