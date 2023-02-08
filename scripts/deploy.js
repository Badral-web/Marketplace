async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
  
    const Token = await ethers.getContractFactory("Marketplace.sol");
    const Token1 = await ethers.getContractFactory("Artwork.sol");
    
    const token = await Token.deploy();
    const token1 = await Token1.deploy();
  
    console.log("Token address:", token.address);
    console.log("Token address1:", token1.address);
  }