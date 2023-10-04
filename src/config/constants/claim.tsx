import Trans from 'components/Trans'


const claims: any[] = [
  {
    cid: 0, // This one and next are zero but different contracts
    name: 'CoinCollect OG Believers',
    description: <Trans>CoinCollect NFT holders, your share of the reward pool awaits! Step into the realm of exclusive benefits and claim your deserving share. CoinCollect - where ownership translates into rewards!</Trans>,
    imageLink: 'https://coincollect.org/assets/images/claim/CoinCollectClaim.png',
    rewardToken: 'Collect',
    requiredToken: 'Collect NFT', 
    baseAmount: 50,
    nftLimit: 5,
    totalReward: 100000,
    isFinished: false,
    rewardTokenAddress: '0x56633733fc8BAf9f730AD2b6b9956Ae22c6d4148',
    projectSite: 'https://app.coincollect.org',
    version: 1,
  },
  {
    cid: 0,
    name: 'LotShare Rewards',
    description: <Trans>LotShare and CoinCollect NFT holders can now claim their LOT tokens, a gift to our vibrant community. At LotShare, ownership equates to rewards, offering exclusive benefits within our ecosystem.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/claim/lotShareClaim.png',
    rewardToken: 'LOT',
    requiredToken: 'LotShare NFT', 
    baseAmount: 0.2,
    nftLimit: 5,
    totalReward: 15000,
    isFinished: false,
    rewardTokenAddress: '0x8c1245BA1714BD7a61A34Cb63b95331Fa3db497C',
    projectSite: 'https://lotshare.app/',
    version: 2,
  },
  {
    cid: 1,
    name: 'Blitz Rewards',
    description: <Trans>BRAWLER and CoinCollect NFT holder? Your share of BLITZ tokens awaits you as a special gift from us. At BlitzBrawler, we turn ownership into rewards, tournaments, contests, games, and endless fun.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/blitz/BlitzClaim.png',
    rewardToken: 'BLITZ',
    requiredToken: 'BRAWLER NFT', 
    baseAmount: 500,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x4e6D6d050BEEfd732344398aE20B23c245d6A59F',
    projectSite: 'https://blitzbrawler.com/',
    version: 2,
  },
  {
    cid: 2,
    name: 'Avatar Rewards',
    description: <Trans>Do you own an Avatar NFT or a CoinCollect NFT? As a special thank you from our team, exclusive AVATAR tokens have been reserved just for you.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/avatar/AvatarsClaim.png',
    rewardToken: 'AVATAR',
    requiredToken: 'AVATAR NFT', 
    baseAmount: 5000,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x0D8550552A7F277e141331C2fe7798BB5c9359b9',
    projectSite: 'https://avatarsai.net/',
    version: 2,
  },
  {
    cid: 3,
    name: 'Galxe OAT Rewards',
    description: <Trans>The CoinCollect Galxe Claim Pool is now open to all OAT NFT holders! Be among the first 10,000 to hit the claim button, and you'll be eligible to claim exclusive rewards.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/galxe/GalxeClaim.png',
    rewardToken: 'AVATAR',
    requiredToken: 'GALXE OAT', 
    baseAmount: 250,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x0D8550552A7F277e141331C2fe7798BB5c9359b9',
    projectSite: 'https://galxe.com/CoinCollect',
    version: 2,
    useApi: true,
  },
  {
    cid: 4,
    name: 'Hunter Rewards',
    description: <Trans>Do you own an BeastHunter NFT or a CoinCollect NFT? As a special thank you from our team, exclusive HUNT tokens have been reserved just for you.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/BeastHunter/HunterClaim.png',
    rewardToken: 'HUNT',
    requiredToken: 'HUNTER NFT', 
    baseAmount: 2000,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0xeacde3e3c5aae81d435d9a592827803296e25aae',
    projectSite: 'https://beasthunter.app/',
    version: 2,
  },
  {
    cid: 5,
    name: 'Key Rewards',
    description: <Trans>Unlock the world of web3 with the KEY. Mint your Key NFT on OpenSea, then claim exclusive rewards on CoinCollect. Join and open doors to the metaverse and beyond!</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/key/keyClaim.gif',
    rewardToken: 'AVATAR',
    requiredToken: 'KEY NFT', 
    baseAmount: 3500,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x0D8550552A7F277e141331C2fe7798BB5c9359b9',
    projectSite: 'https://opensea.io/collection/key2web3/drop',
    version: 2,
    useApi: true,
  },
  {
    cid: 6,
    name: 'Nitro Rewards',
    description: <Trans>Are you a holder of a CAR NFT or a CoinCollect NFT? In appreciation for your support, our team has exclusively reserved NITRO tokens for you.</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/BeastHunter/HunterClaim.png',
    rewardToken: 'NITRO',
    requiredToken: 'CAR NFT', 
    baseAmount: 2000,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x7b6459369Ff7Eda42c1A8465c079D48EF95c1D75',
    projectSite: 'https://nitroclash.net/',
    version: 2,
  },
/*
  {
    cid: 4,
    name: 'Galxe Pass Rewards',
    description: <Trans>The CoinCollect Galxe Claim Pool is now open to all OAT NFT holders! Be among the first 10,000 to hit the claim button, and you'll be eligible to claim exclusive rewards. Act fast, as these rewards are only available to the quickest claimers!</Trans>,
    imageLink: 'https://coincollect.org/assets/images/partners/galxe/GalxeClaim.png',
    rewardToken: 'AVATAR',
    requiredToken: 'GALXE PASS', 
    baseAmount: 1250,
    nftLimit: 5,
    totalReward: 120000000,
    isFinished: false,
    rewardTokenAddress: '0x0D8550552A7F277e141331C2fe7798BB5c9359b9',
    projectSite: 'https://avatarsai.net/',
    version: 2,
    useApi: true,
  },
*/
  /*
  {
    name: 'Holder Party',
    description: <Trans>Rewards ready for top 100 Collect holders</Trans>,
    imageLink: 'https://lotshare.netlify.app/images/artwork/08.jpg',
    rewardToken: 'Shiba',
    requiredToken: 'Collect NFT', 
    baseAmount: 12,
    isFinished: false,
  },
  {
    name: 'Community Rewards',
    description: <Trans>Most active user on twitter will be rewarded</Trans>,
    imageLink: 'https://lotshare.netlify.app/images/artwork/09.jpg',
    rewardToken: 'Lot',
    requiredToken: 'Lotshare NFT', 
    baseAmount: 15,
    isFinished: false,
  },
  */
]


export default claims
