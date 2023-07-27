"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,u=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(3117),i=(a(7294),a(3905));const o={},r=void 0,l={unversionedId:"smoothie/introduction/introduction",id:"smoothie/introduction/introduction",title:"introduction",description:"What is Smoothie and why it matters",source:"@site/docs/smoothie/introduction/introduction.md",sourceDirName:"smoothie/introduction",slug:"/smoothie/introduction/",permalink:"/smoothie/introduction/",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/smoothie/introduction/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"Smoothie",previous:{title:"Smoothie",permalink:"/smoothie"}},s={},d=[{value:"What is Smoothie and why it matters",id:"what-is-smoothie-and-why-it-matters",level:2},{value:"Higher rewards?",id:"higher-rewards",level:3},{value:"Finally getting at par with Lido and big Exchanges!",id:"finally-getting-at-par-with-lido-and-big-exchanges",level:3},{value:"Configuration parameters",id:"configuration-parameters",level:2},{value:"Source of rewards",id:"source-of-rewards",level:2},{value:"Subscribe/unsubscribe/ban",id:"subscribeunsubscribeban",level:2},{value:"State machine",id:"state-machine",level:2},{value:"Rewards calculation",id:"rewards-calculation",level:2},{value:"Merkle trees and proofs",id:"merkle-trees-and-proofs",level:2},{value:"Smart contract",id:"smart-contract",level:2}],h={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-smoothie-and-why-it-matters"},"What is Smoothie and why it matters"),(0,i.kt)("p",null,"Smooth is an MEV Smoothing Pool. It helps earn higher rewards on average by pooling MEV rewards among a group of Stakers. "),(0,i.kt)("p",null,"It works by setting the Fee Recipient address to the Smooth Smart Contract, and the rewards that the Smart Contract receives are distributed among all those who are pooling their rewards."),(0,i.kt)("h3",{id:"higher-rewards"},"Higher rewards?"),(0,i.kt)("p",null,'A Solo staker proposes 5 or 6 blocks on average per year. The chances of getting a "Lottery Block" are very slim, and most likely we are going to get rewards on the order of 0.00-something ETH. '),(0,i.kt)("p",null,"If we pool together all our rewards, we have collectively a much higher chance of getting lottery blocks, and then we divide the big payout among all participants! It's the same concept as Bitcoin Mining Pools."),(0,i.kt)("p",null,"In short, a participant gives up their almost impossible chance of getting a Lottery Block by the much higher chance of getting higher rewards. In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/htimsk/SPanalysis"},"bakctesting simulations"),", rewards were up to 80% higher than being a solo staker!"),(0,i.kt)("h3",{id:"finally-getting-at-par-with-lido-and-big-exchanges"},"Finally getting at par with Lido and big Exchanges!"),(0,i.kt)("p",null,"Lido, Centralized Exchanges and other pools with lots of validators consistently hit lottery blocks because of the sheer numbers of validators they have. They naturally split these rewards between all their validators, effectively being at an advantage vs the average solo staker. "),(0,i.kt)("p",null,"This is a centralizing force, as the rich become richer and bigger operations get bigger rewards. Now Solo Stakers with few validators don't depend on luck to be at par with the big guys!"),(0,i.kt)("p",null,"The pool has two main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"oracle"),": Calculates off-chain the rewards that each participant of the smoothing pool can claim, using on-chain data from the consensus and execution layer. It also summarizes all balances and addresses with the right to claim in a merkle root, that is periodically stored on-chain, making it non-revertable. On the other hand it serves as a data availability layer, that can be used to get the proofs one needs to use on-chain to claim their share of the rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"contract"),": Gets all the rewards produced by the members of the pool and provides a set of functions to subscribe, unsubscribe and claim rewards by providing the appropriate proofs.")),(0,i.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,i.kt)("p",null,"The smoothing pool shall contain the following configuration parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COLLATERAL_GWEI"),": Amount of collateral in gwei that a validator need to join the pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEPLOYED_SLOT"),": Slot when the smoothing pool contract was deployed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHECKPOINT_SIZE_SLOTS"),": How often the smart contract root is updated with new rewards, in slots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OWNER_ADDRESS"),": Set of addresses with ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix that are allowed to update the smoothing pool contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUORUM"),": Amount of ",(0,i.kt)("inlineCode",{parentName:"li"},"OWNER_ADDRESS")," that have to agree on the merkle root before it's considered consolidated. As an example this number could be 3/4, where 4 addresses are allowed to update the root and 3 of them have to agree."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POOL_CONTRACT_ADDRESS"),": Address with ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix of the smoothing pool contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NETWORK"),": Network where rewards are being calculated: ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"goerli"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_ADDRESS"),": Address with ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix of the account that can claim the smoothing pool fees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_PERCENT"),": Amount in % (scaled by 100) that ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_ADDRESS")," gets for every reward sent to the smoothing pool. Note that it also gets rounding remainders on top, but this is almost neglectable.")),(0,i.kt)("h2",{id:"source-of-rewards"},"Source of rewards"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Reward")," is considered to be any balance denominated in Eth that is sent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_CONTRACT_ADDRESS"),". These are detected by the oracle and shared fairly among all the participants in the pool at a given time. The oracle shall detect all these types of rewards and distribute them fairly (see rewards calculation section). All of these rewards are denominated in ",(0,i.kt)("inlineCode",{parentName:"p"},"ETH")," and other types of tokens such as ERC20 are not considered by the oracle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MevBlock"),": Comes from a block proposal where the reward was obtained via an off-chain agreement using tools such as mev-boost, usually coming as the last transaction in the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VanilaBlock"),": Comes from a block proposal where the reward was sent via the protocol ",(0,i.kt)("inlineCode",{parentName:"li"},"fee_recipient"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Donation"),": Any address can send an arbitrary amount, either via an Eth tx or via a smart contract to the pool.")),(0,i.kt)("h2",{id:"subscribeunsubscribeban"},"Subscribe/unsubscribe/ban"),(0,i.kt)("p",null,"Only the following validators can subscribe into the pool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validators in active state (not exiting nor slashed). Validators with a wrong state will be ignored."),(0,i.kt)("li",{parentName:"ul"},"Validators with eth1 withdrawal credentials. Validators with BLS credentials will be ignored.")),(0,i.kt)("p",null,"Rewards are only shared among subscribed participants in the pool. Hereunder it's explained the different ways in which a validator can join or leave the pool. Joining can be done with manual or automatatic subscription. And leaving can be done by unsubscribing to the pool or by being banned from it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscribing")," to the pool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ManualSubscription"),": If any validator sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"MevBlock")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"VanilaBlock")," reward to the smoothing pool contract ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_CONTRACT_ADDRESS")," it is considered automatically subscribed into the pool, and will start accruing rewards from that moment. This type of subscription doesn't require any collateral or lock up of funds, since by successfully proposing a block with the correct fee recipient, we consider that this validator has enough skin in the game. However, since block proposals are a rare event, it can take weeks or even months for a validator to get automatically subscribed. This is not ideal because it won't be leveraging the benefits of the smoothing pool during this time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AutoSubscription"),": On the other hand, a validator can start earning rewards from the very beginning if it adds ",(0,i.kt)("inlineCode",{parentName:"li"},"COLLATERAL_GWEI")," amount as collateral. This collateral can be deposited by calling the register function in the oracle smart contract. This type of subscription allows the validator to start earning rewards without having to wait weeks or months until a proposal is detected. A subscription is only considered valid if:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collateral>=COLLATERAL_GWEI")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"validatorIndex")," included is the transaction"),(0,i.kt)("li",{parentName:"ul"},"The account that sent the transaction matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"validatorIndex")," withdrawal credentials.")))),(0,i.kt)("p",null,"Note that the collateral that a validator deposits via its withdrawal address is added to the validator ",(0,i.kt)("inlineCode",{parentName:"p"},"PendingRewards"),". This means that it is returned after the first valid block proposal. In other words, the pool doesnt get the collateral, it just blocks it until the validator proposes a block. See ",(0,i.kt)("inlineCode",{parentName:"p"},"PendingRewards"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AccumulatedRewards")," down below. Note also that if by mistake a validator deposits the colateral twice, the second one is also returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unsunscribing")," from the pool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Unsubscribe"),": Similarly, the oracle shall detect the following event from the smoothing pool smart contract, which signals that a given ",(0,i.kt)("inlineCode",{parentName:"li"},"validatorIndex")," was unsubscribed from the pool. Note that the unsubscription is only considered valid if the ",(0,i.kt)("inlineCode",{parentName:"li"},"sender")," matches the validator withdrawal address.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Banning")," from the pool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The oracle shall detect if an active validator in the smoothing pool proposed a block with a ",(0,i.kt)("inlineCode",{parentName:"li"},"fee_recipieint")," different than ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_CONTRACT_ADDRESS"),". This means that this validator sent its reward to a different address, so we consider this misbehaving and the validator will be banned forever from the smoothing pool.")),(0,i.kt)("h2",{id:"state-machine"},"State machine"),(0,i.kt)("p",null,"The oracle uses the following ",(0,i.kt)("a",{parentName:"p",href:"https://excalidraw.com/#json=lnKxFVwNZ82gz7gVZNHoq,m3mIc64GhKrpg3urVyI6dg"},"state machine")," to track the status of the different validators that are subscribed to the smoothing pool. Different actions can trigger a state change and in the following image all possible transitions are described."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/dappnode/mev-sp-oracle/blob/main/spec/states.png?raw=true",alt:"statemachine"})),(0,i.kt)("p",null,"There are 5 different states a validator can have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Active"),": A validator is active and subscribed to the pool, earning rewards over the time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YellowCard"),": The validator missed only its last block proposal, but still earns rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RedCard"),": The validator missed two block proposals in a row. In this state the validator does not earn rewards until a valid block has been proposed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NotSubscribed:")," The validator is no longer subscribed to the pool, but still tracked by the validator. For example, a validator that unsubscribed. Note that this is still tracked because a validator can unsubscribe but it may still pending balance to claim. In this state the validator does not earn rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Banned"),": The validator is banned forever from the pool. A validator is banned when its subscribed to the pool but proposes a block with the wrong fee recipient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Untracked"),": The validator is not tracked by the pool. It never subscribed before nor has any active subscription.")),(0,i.kt)("p",null,"And 6 different actions can trigger a state transition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProposalOk"),": The validator proposed a valid block with its rewards correctly sent to the smoothing pool address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProposalMissed"),": The validator should have proposed a block but missed its proposal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProposalWrongFee"),": The validator proposes a block but with a wrong fee recipient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ManualSubscription"),": The validator manually subscribes to the pool, depositing collateral for its validator index by calling the smart contract function (see event)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AutoSubscription"),": The validator is automatically subscribed to the pool, by setting as fee recipient the smoothing pool address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Unsubscribe"),": The validator manually unsubscribes to the pool, calling the unsubscribe function from the smart contract (see event).")),(0,i.kt)("h2",{id:"rewards-calculation"},"Rewards calculation"),(0,i.kt)("p",null,"When a validator has an active subscription to the pool (",(0,i.kt)("inlineCode",{parentName:"p"},"Active")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"YellowCard")," state) it is eligible for rewards, meaning that it will receive a given share of each reward that is sent to the pool. Validators in ",(0,i.kt)("inlineCode",{parentName:"p"},"RedCard")," are considered subscribed, but don't earn rewards until they become active again."),(0,i.kt)("p",null,"There are two ",(0,i.kt)("strong",{parentName:"p"},"sources of rewards"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Block proposals (execution layer rewards earned via tips or MEV), see ",(0,i.kt)("inlineCode",{parentName:"li"},"MevBlock")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"VanilaBlock"),"."),(0,i.kt)("li",{parentName:"ul"},"Donations by any user that sends an arbitrary amount of Eth balance to the contract, see ",(0,i.kt)("inlineCode",{parentName:"li"},"PayableDonation")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"NonPayableDonation"),".")),(0,i.kt)("p",null,"With the incoming rewards to the pool, the oracle calculates two different types of validator rewards:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccumulatedRewards"),": This rewards are already consolidated, meaning that they can be claimed at any time, by submitting a valid proof to the smart contract. This assumes that a ",(0,i.kt)("inlineCode",{parentName:"li"},"CHECKPOINT_SIZE_SLOTS")," has been reached, and rewards are ready to be claimed onchain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PendingRewards"),": This rewards are not ",(0,i.kt)("em",{parentName:"li"},"consolidated")," yet, meaning that they belong to the validator but they can be claimed, until a valid block proposal is sent to the smoothing pool.")),(0,i.kt)("p",null,"It's defined as ",(0,i.kt)("strong",{parentName:"p"},"consolidate balance")," when a validator proposes a block whose fee recipient address is correctly sent to the smoothing pool (",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_CONTRACT_ADDRESS")," address). When a validator consolidates its rewards, all its ",(0,i.kt)("inlineCode",{parentName:"p"},"PendingRewards")," are added to its ",(0,i.kt)("inlineCode",{parentName:"p"},"AccumulatedRewards"),", meaning that what was pending is now ready to claim at any time. Note also that after performing this operation the ",(0,i.kt)("inlineCode",{parentName:"p"},"PendingRewards")," are reset. So consolidating can be seen as a way of converting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pending")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"Accumulated"),"."),(0,i.kt)("p",null,"All validator rewards are updated on every ",(0,i.kt)("strong",{parentName:"p"},"finalized")," block that is added to the chain. It is important to highlight that it is only done on finalized blocks, since this implies that the block is non-reversable and no reorgs are possible at this point (unless something major happens)."),(0,i.kt)("p",null,"When calculating the rewards, the pool operator takes a cut for each reward that is sent to the pool, where ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_FEES_ADDRESS")," gets ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_FEES_PERCENT"),". The rest of the rewards are shared evenly among all eligible validators. This value shall not be higher than 100% and its stored as scaled by x100, which allows to have two decimal points."),(0,i.kt)("p",null,"Regarding the pool fees, note that the funds are not sent ",(0,i.kt)("em",{parentName:"p"},"per se")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_FEES_ADDRESS")," but they are added as a leaf in the merkle tree (see merkle tree section). In other words, the owner of the pool can claim the fees as if it were a validator, by providing a valid merkle proof and using said address as sender."),(0,i.kt)("p",null,"For each reward (see types of rewards) that is sent to the pool on a finalized block, it is distributed as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the amount of eligible validators (validators that are eligible for rewards) ",(0,i.kt)("inlineCode",{parentName:"li"},"Active")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"YellowCard")," state."),(0,i.kt)("li",{parentName:"ul"},"The pool takes ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_PERCENT")," of that reward, increasing its balance ",(0,i.kt)("inlineCode",{parentName:"li"},"AccumulatedRewards")," by that amount + remainder (if any). Note that all the arithmetic is integer based without decimals, hence the remainder."),(0,i.kt)("li",{parentName:"ul"},"The reward minus the cut (and the remainder) is shared among all eligible validators. Note that if there is also a reminder, it goes to the ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_ADDRESS"),", increasing its ",(0,i.kt)("inlineCode",{parentName:"li"},"AccumulatedRewards"),"."),(0,i.kt)("li",{parentName:"ul"},"Each eligible validator gets its ",(0,i.kt)("inlineCode",{parentName:"li"},"PendingRewards")," increased by that amount."),(0,i.kt)("li",{parentName:"ul"},"If the reward comes from a block proposal, the validator gets its ",(0,i.kt)("inlineCode",{parentName:"li"},"AccumulatedRewards")," consolidated, since it has proven that is participating in the pool.")),(0,i.kt)("p",null,"Note that the pool gets the remainders from two different divisions, but this is done for simplicity and since the calculations are in wei, the value of it is neglectable. Doing this makes the oracle fair with all validators, since each one of them gets the exact same amount of rewards. So in practice, ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_FEES_ADDRESS")," just gets ",(0,i.kt)("inlineCode",{parentName:"p"},"POOL_FEES_PERCENT"),"."),(0,i.kt)("h2",{id:"merkle-trees-and-proofs"},"Merkle trees and proofs"),(0,i.kt)("p",null,"Since storing all rewards calculations on-chain would be almost impossible and very expensive, merkle trees are used to summarize the state of all validators tracked by the oracle in a given value called *",(0,i.kt)("em",{parentName:"p"},"merkle root"),". All the computation of the rewards is done off-chain by the oracle, and on every ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKPOINT_SIZE_SLOTS")," all rewards all calculated and summarized in a new merkle root that is stored on-chain in Ethereum."),(0,i.kt)("p",null,"Each leaf of the tree contains two values, the withdrawal address and the accumulated balance. Note that in order to be more gas efficient and allow to claim of multiple validators in just one transactions, all validators belonging to the same withdrawal address are aggregated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type RawLeaf struct {\n    WithdrawalAddress     string\n    AccumulatedBalance *big.Int\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/dappnode/mev-sp-oracle/blob/main/spec/merkles.png?raw=true",alt:"trees"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The merkle tree leafs are ordered by its deposit address in ascending order."),(0,i.kt)("li",{parentName:"ul"},"The merkle tree is prepended (first element) with a leaf containing ",(0,i.kt)("inlineCode",{parentName:"li"},"POOL_FEES_ADDRESS")," and the accumulated balance. See rewards calculation section."),(0,i.kt)("li",{parentName:"ul"},"The merkle leafs are hashed with solidity ",(0,i.kt)("inlineCode",{parentName:"li"},"sha3")," hashing algorithm."),(0,i.kt)("li",{parentName:"ul"},"Withdrawal addresses in the merkle tree shall be unique."),(0,i.kt)("li",{parentName:"ul"},"The hashing algorithm for the merkle tree is ",(0,i.kt)("inlineCode",{parentName:"li"},"keccak256"),"."),(0,i.kt)("li",{parentName:"ul"},"The hashing algotithm for the merkle tree shall sort sibling pairs."),(0,i.kt)("li",{parentName:"ul"},"The withdrawal addresses in the merkle tree shall be in lower case.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKPOINT_SIZE_SLOTS")," the oracle updates in the smoothing pool smart contract stored in the Ethereum blockchain a new merkle root, that summarizes the rewards that each address can claim. Anyone that controls said address, can claim their rewards by providing a valid merkle proof, prooving that a given leaf is contained within the merkle tree represented by that merkle root."),(0,i.kt)("p",null,"Since all this data is not available in Ethereum, the oracle shall provide this proofs so that they can be used off-chain. Note that these proofs can be generated by anyone compliying with this specs and with the existing available data on-chain. See ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/es/developers/tutorials/merkle-proofs-for-offline-data-integrity/"},"merkle proofs")),(0,i.kt)("h2",{id:"smart-contract"},"Smart contract"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dappnode/mev-sp-contracts"},"https://github.com/dappnode/mev-sp-contracts")))}c.isMDXComponent=!0}}]);