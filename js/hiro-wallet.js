//check if Hiro wallet is installed
function checkHiroWalletInstalled() {
    if (typeof window.HiroWalletProvider !== 'undefined') {
      return true;
    } else {
      return false;
    }
  }
  
  // prompt install Hiro wallet
  function promptInstallHiroWallet() {
    alert('Hiro wallet extension is not detected. Please install Hiro wallet to proceed.');
  }
  
  // Function NFT image click event
  function handleNFTImageClick() {
    if (!checkHiroWalletInstalled()) {
      promptInstallHiroWallet();
    } else {
        // Put Logic Here        
    }
  }
  