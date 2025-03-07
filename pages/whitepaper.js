import React from 'react'
import Head from 'next/head'
import { Box, Heading, Image } from '@chakra-ui/react'

const WhitePaper = () => {

	return (
		<>
			<Head>
				<title>Whitepaper - Vader - decentralized liquidity protocol</title>
			</Head>
			<Box maxWidth='55rem' m='0 auto' p={{ base: '3.3rem 1.25rem', md: '3.3rem 2.5rem' }}>
				<Heading as='h1' size='md'>WHITEPAPER</Heading>
				<Heading as='h2' size='sm' textAlign='center'>
					VADER PROTOCOL: Incentivised liquidity, stable coin and lending platform
				</Heading>
				<Box as='p' textAlign='justify' textStyle='p' p='0 3rem'>
				Vader is a liquidity protocol that combines a collateralized stablecoin with liquidity pools. The stablecoin, USDV, is issued by burning VADER tokens. Liquidity pools either use USDV and VADER as the settlement asset, with a zero-slippage conversion available between the two. A daily emission rate of VADER funds liquidity incentives, a protocol interest rate, impermanent loss protection and a float to facilitate protocol lending. Synthetic assets are minted from liquidity pool shares which are eligible to earn an interest rate, as well as being collateral for borrowing debt against. The collateral is used to pay an interest rate which is added into the pools to increase returns.
				</Box>

				<Heading as='h2' size='xs'>Introduction</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Stablecoins and synthetic assets are a noble problem to solve. The key problem is a matter of liquidity and sensing the correct purchasing power of assets at all times. In addition, the use of incentives can
				ensure the maximum uptake of the system and the fast bootstrapping of capital. Existing stablecoms
				and synthetic asset designs fall short because they use oracles that are not liquidity sensitive and can
				be manipulated, do not incentivise the makers of liquidity properly, and are not natively interest-bearing.
				</Box>

				<Box as='p' textAlign='justify' textStyle='p'>
				Vader is a new form of liquidity protocol that seeks to be self-serving. It uses its own liquidity and awareness of asset purchasing power to support the creation of a collateralized stablecoin. It also is
				capable of using liquidity units as collateral for synthetic assets, of which it will always have
				guaranteed redemption liquidity for. It has a fair and transparent incentive strategy to maximise the
				depth of liquidity pools and adoption of synthetic assets. It uses a liquidity-sensitive fee to ensure safe
				and sustainable creation of debt, which can increase the capital efficiency of the system.
				</Box>

				<Heading as='h2' size='xs'>Key Features</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				The following are the key features of Vader Protocol:
				<br/><br/>
					<ol style={{ paddingLeft: '2rem' }}>
						<li style={{ paddingLeft: '3px' }}>Uses a collateralized stablecoin settlement asset</li>
						<li style={{ paddingLeft: '3px' }}>An ability to burn VADER to mint USDV</li>
						<li style={{ paddingLeft: '3px' }}>Impermanent Loss protection for Liquidity Providers in the pools</li>
						<li style={{ paddingLeft: '3px' }}>Continuous liquidity pool incentives</li>
						<li style={{ paddingLeft: '3px' }}>An ability to mint interest-bearing synthetic assets from pool liquidity</li>
						<li style={{ paddingLeft: '3px' }}>An ability to borrow debt against USDV, VADER or Synthetic Assets</li>
					</ol>
				</Box>

				<Heading as='h2' size='xs'>Architecture</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
					There are two types of pools in the system, although it is abstracted to the user. The first group of pools are the “Anchor pools” which use VADER as a settlement asset. This allows the system to sense the anchor price, which is the median of the prices of the anchor pools. The second group of pools are the “Asset pools” which use USDV as the base asset, which drives liquidity and demand of the stablecoin. The Anchor pools [VADER:stablecoin] are linked to the Asset pools [USDV:asset] via 0-slippage swaps between USDV and VADER.
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				VADER has extra functions to ERC20:
					<ol style={{ paddingLeft: '2rem' }}>
						<li style={{ paddingLeft: '3px' }}>VADER is minted if VETH is burnt, 1000:1</li>
						<li style={{ paddingLeft: '3px' }}>VADER is minted if USDV is burnt, in accordance with the inverse Anchor price</li>
						<li style={{ paddingLeft: '3px' }}>Has a daily emission rate of VADER, which is sent to the USDV Contract</li>
					</ol>
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>USDV Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				USDV has extra functions to ERC20:
				<ol style={{ paddingLeft: '2rem' }}>
						<li style={{ paddingLeft: '3px' }}>USDV is minted if VADER is burt, in accordance with the Anchor price</li>
						<li style={{ paddingLeft: '3px' }}>...</li>
						<li style={{ paddingLeft: '3px' }}>Receives VADER from the VADER contract, of which it burns a proportion of it into USDV, then makes that available to be claimed by USDV stakers. The rest it sends to the Router Contract to be used by its Reserve.</li>
					</ol>
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER ROUTER and POOLS Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
					The ROUTER wraps the POOLS contract which contains the assets in the pools. POOLS maps
					liquidity ownership of members, which the ROUTER users to enable Impermanent Loss protection.
					The POOLS Contract is wrapped by the Router. The ROUTER has a reserve which facilitates:
					<ol style={{ paddingLeft: '2rem' }}>
						<li style={{ paddingLeft: '3px' }}>Incentives for each pool</li>
						<li style={{ paddingLeft: '3px' }}>Impermanent Loss Protection</li>
						<li style={{ paddingLeft: '3px' }}>Minting/Burning of Synthetic Assets</li>
						<li style={{ paddingLeft: '3px' }}>Protocol Lending</li>
					</ol>
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER FACTORY and SYNTHS Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				An ERC20 Factory is allowed to be called by the Router to deploy and register Synthetic Assets, which are vanilla ERC-20s.
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER VAULT Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				Allows anyone to lock up Synthetic Assets and earn an interest rate, claimable every block.
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER UTILS Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				The Utils contract contains logic for the system.
				</Box>

				<Box as='h3' size='xs' textTransform='uppercase'>VADER DAO Contract</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				The DAO senses the weight of each member (based on share of the weight in the vault) and allows
				system parameters to be changed with various consensus levels.
				</Box>

				<Heading as='h2' size='xs'>VADER Token</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				There are three use cases of VADER. The first is as a common settlement asset in anchor pools to
enable the system to sense the purchasing power of a group of stablecoins - this transmits the
“anchor” price in USD. The second is to allow anyone to burn VADER to mint USDV at 1:1 the
anchor price. The third is to allow anyone to lock up VADER as collateral for borrowing against.
				</Box>
				
				<Box as='p' textAlign='justify' textStyle='p'>
				VADER is issued 1000:1 for holders of Vether (VETH) - which itself is distributed via a fair process
of Proof-of-Value. Since VETH 1s acquired only by the provable burning of ETH; it is sybil-resistant,
decentralised and has unforgeable costliness. VETH has a maximum supply of 1,000,000 units, issued
over 10+ years.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				VADER has a maximum supply of 2bn. 1bn is clarmed by the holders of VETH, and the additional
1bn is paid out based on a smooth emission curve starting at 50% APY and dropping to roughly 10%
after 5 years. VADER will continue to pay out until 2bn units have been issued. VADER contains a
Fee-On-Transfer which is proportional to the current supply, but increases linearly the closer VADER
is to its Maximum Supply in the range from 0 to 100 Basis Points. As such, the emission rate can be
offset by the burn rate at some point into the future.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
dailyEmission = (maxSupply - currentSupply) / emissionCurve
				</Box>

				<Heading as='h2' size='xs'>Liquidity Incentives</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Dividends are paid out to Liquidity Pools, both in the form of VADER and USDV, as well as paying
SYNTH stakers. The incentives are synced into pool balances each time a swap is made, so over time
LPs realise a yield. This yield, as well as slip-based fees, offsets any Impermanent Loss, and the LP
should always realise a gain after a period of time.
				</Box>

				<Heading as='h2' size='xs'>Impermanent Loss Protection</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				The deposit value for each member is recorded when they deposit. When they go to withdraw, the
redemption value is computed. If it is less than the deposit value, the member is paid the deficit from
the reserve. The protection issued increases from 0 to 100% linearly for 100 days. Coverage is given
by the following equation:
				</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
				coverage = (VO - V1) + (AO - A1) * V1/A1<br/>
				VO: USDVDeposited; AO: assetDeposited;<br/>
				V1: USDVToRedeem; A1: assetToRedeem;<br/>
				</Box>

				<Heading as='h2' size='xs'>Liquidity Pools</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>Liquidity Pools use either VADER or USDV as the common settlement asset. This allows the system
to accurately price any pool, as well as sensing purchasing power of its assets. Using USDV as a
common settlement asset in Asset pools takes away any friction for requiring users hold exposure to a
particular asset. In fact, all of the VADER Liquidity Pools (Anchor and Asset) are stablecoin-paired
pools, making Impermanent Loss easy to reason about.</Box>
				<Box as='p' textAlign='justify' textStyle='p'>The liquidity model includes a liquidity-sensitive slip-based fee. This maximises revenue for liquidity
providers under high demand of liquidity, and prevents manipulation. It is also necessary to support
liquidations of collateral. The algorithm is:</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
				<Image
					width='82.101945pt'
					maxW='120px'
					src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23ffffff' width='82.101945pt' height='33.595168pt' viewBox='-.239051 -.228234 82.101945 33.595168'%3E%3Cdefs%3E%3Cpath id='g4-40' d='M3.033208 1.596007V1.556306C2.000965 .627287 1.381618-.770213 1.381618-2.215354C1.381618-3.652554 2.000965-5.057994 3.033208-5.994954V-6.034655H2.151831C1.230752-4.986531 .69875-3.77166 .69875-2.215354S1.230752 .547883 2.151831 1.596007H3.033208Z'/%3E%3Cpath id='g4-41' d='M2.906163-2.215354C2.906163-3.77166 2.37416-4.986531 1.461022-6.034655H.571704V-5.994954C1.611888-5.057994 2.223294-3.652554 2.223294-2.215354C2.223294-.770213 1.611888 .627287 .571704 1.556306V1.596007H1.461022C2.37416 .547883 2.906163-.659048 2.906163-2.215354Z'/%3E%3Cpath id='g4-43' d='M5.68528-2.215354V-2.8347H3.573151V-4.95477H2.929984V-2.8347H.817855V-2.215354H2.929984V-.103224H3.573151V-2.215354H5.68528Z'/%3E%3Cpath id='g4-50' d='M4.533932 0V-.659048H1.42926C3.660495-2.556788 4.287781-3.199955 4.287781-4.303662C4.287781-5.280323 3.573151-5.891729 2.390041-5.891729C1.818337-5.891729 1.135468-5.717042 .770213-5.534414V-4.716559H.809914C1.326036-5.057994 1.905681-5.224741 2.37416-5.224741C3.08085-5.224741 3.493748-4.867426 3.493748-4.26396C3.493748-3.398464 2.985566-2.8347 .627287-.809914V0H4.533932Z'/%3E%3Cpath id='g4-61' d='M5.550295-3.033208V-3.652554H.95284V-3.033208H5.550295ZM5.550295-1.405439V-2.024786H.95284V-1.405439H5.550295Z'/%3E%3Cpath id='g2-3' d='M3.287671-5.104857C3.299626-5.272229 3.299626-5.559153 2.988792-5.559153C2.797509-5.559153 2.642092-5.403736 2.677958-5.248319V-5.092902L2.84533-3.239851L1.315068-4.351681C1.207472-4.411457 1.183562-4.435367 1.099875-4.435367C.932503-4.435367 .777086-4.267995 .777086-4.100623C.777086-3.90934 .896638-3.861519 1.016189-3.801743L2.713823-2.988792L1.06401-2.187796C.872727-2.092154 .777086-2.044334 .777086-1.865006S.932503-1.530262 1.099875-1.530262C1.183562-1.530262 1.207472-1.530262 1.506351-1.75741L2.84533-2.725778L2.666002-.71731C2.666002-.466252 2.881196-.406476 2.976837-.406476C3.120299-.406476 3.299626-.490162 3.299626-.71731L3.120299-2.725778L4.65056-1.613948C4.758157-1.554172 4.782067-1.530262 4.865753-1.530262C5.033126-1.530262 5.188543-1.697634 5.188543-1.865006C5.188543-2.044334 5.080946-2.10411 4.937484-2.175841C4.220174-2.534496 4.196264-2.534496 3.251806-2.976837L4.901619-3.777833C5.092902-3.873474 5.188543-3.921295 5.188543-4.100623S5.033126-4.435367 4.865753-4.435367C4.782067-4.435367 4.758157-4.435367 4.459278-4.208219L3.120299-3.239851L3.287671-5.104857Z'/%3E%3Cuse id='g6-40' xlink:href='%23g4-40' transform='scale(1.5)'/%3E%3Cuse id='g6-41' xlink:href='%23g4-41' transform='scale(1.5)'/%3E%3Cuse id='g6-43' xlink:href='%23g4-43' transform='scale(1.5)'/%3E%3Cuse id='g6-61' xlink:href='%23g4-61' transform='scale(1.5)'/%3E%3Cpath id='g1-88' d='M3.727988-4.359244L-.357315 0H.929019L4.156766-3.501688L5.740863 0H7.003376L4.978591-4.347334L9.028162-8.658936H7.729917L4.549812-5.20489L2.977626-8.658936H1.727023L3.727988-4.359244Z'/%3E%3Cpath id='g1-89' d='M8.5041-8.658936H7.241586L3.966198-4.764201L2.477385-8.658936H1.238692L3.168194-3.680346L2.322548 0H3.477867L4.359244-3.799451L8.5041-8.658936Z'/%3E%3Cpath id='g1-120' d='M2.941894-3.287299L-.404957 0H.94093L3.382583-2.489295L4.716559 0H5.955252L4.132945-3.227747L7.455975-6.491225H6.110088L3.692256-4.01384L2.346369-6.491225H1.119587L2.941894-3.287299Z'/%3E%3Cpath id='g1-121' d='M1.500723 2.394011L7.348781-6.491225H6.15773L3.049089-1.667471L2.13198-6.491225H1.012393L2.191533-.381136L.297763 2.394011H1.500723Z'/%3E%3C/defs%3E%3Cg id='page1' transform='matrix(1.13 0 0 1.13 -63.986043 -61.090727)'%3E%3Cuse x='56.413267' y='70.607308' xlink:href='%23g1-121'/%3E%3Cuse x='67.110427' y='70.607308' xlink:href='%23g6-61'/%3E%3Cuse x='81.406096' y='62.519549' xlink:href='%23g1-120'/%3E%3Cuse x='91.546699' y='62.519549' xlink:href='%23g2-3'/%3E%3Cuse x='100.18097' y='62.519549' xlink:href='%23g1-88'/%3E%3Cuse x='111.899647' y='62.519549' xlink:href='%23g2-3'/%3E%3Cuse x='120.533918' y='62.519549' xlink:href='%23g1-89'/%3E%3Crect x='81.406096' y='67.379423' height='.478187' width='47.66376'/%3E%3Cuse x='81.996518' y='81.196839' xlink:href='%23g6-40'/%3E%3Cuse x='87.424162' y='80.814271' xlink:href='%23g1-120'/%3E%3Cuse x='97.564766' y='80.814271' xlink:href='%23g6-43'/%3E%3Cuse x='110.000755' y='80.814271' xlink:href='%23g1-120'/%3E%3Cuse x='117.484695' y='81.196839' xlink:href='%23g6-41'/%3E%3Cuse x='122.912313' y='75.205984' xlink:href='%23g4-50'/%3E%3C/g%3E%3C/svg%3E"
				/><br/>
				x: input; X: Input Balance;<br/>
				y: output; Y: Output Balance;<br/>
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>Slip-based fees break path-independence and a member can theoretically achieve better price
execution by making smaller trades. This characteristic is actually favourable - smaller trades slow
down the rate at which a price can change, and the base-layer gas fee paid (fixed in cost) provides a
lower-level threshold of tolerance. Additionally, there is no freedom of choice of trade size of a
position when it is liquidated by the protocol, arguably the most important aspect to the system.</Box>

			<Heading as='h2' size='xs'>Anchor Pools</Heading>
			<Box as='p' textAlign='justify' textStyle='p'>Anchor pools are special pools that specifically have VADER as the base asset. Anyone can create a
pool, but there are requirements to meet for creating a new Anchor Pool, and only some of them are
allowed to be part of the pricing mechanism. The conditions to list/delist an anchor pool:
					<br/><br/>
					<ol style={{ paddingLeft: '2rem' }}>
						<li style={{ paddingLeft: '3px' }}>The protocol will start with 5 anchor pools (DAI, USDT, USDC, BUSD, UST)</li>
						<li style={{ paddingLeft: '3px' }}>Atany stage, an anchor pool can be replaced by another, as long as the conditions are met:</li>
						<ol style={{ paddingLeft: '2rem'}} type='a' >
							<li style={{ paddingLeft: '3px' }}>Is within 2% of the price of the other four</li>
							<li style={{ paddingLeft: '3px' }}>The pool to be replaced is outside 5% of the other four</li>
							<li style={{ paddingLeft: '3px' }}>Has a depth that exceeds the pool to be replaced (in VADER)</li>
					</ol>
					</ol>
				</Box>

				<Heading as='h2' size='xs' textStyle='noLigs'>Synthetic Assets</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Synths are issued from swapping from any other asset into Synths across the pool. Instead of the
paired asset being emitted, the incoming base asset is added to the pool as liquidity, liquidity units are
issued to account for the new capital and assigned to the protocol, and the synth is minted. When
synths are swapped back to a token, they are burnt, a pro-rata share of units are deleted, and the base
asset is moved out. Even though capital is added and removed, the liquidity units that are issued and
deleted account for the capital such that other passive LPs are not affected.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
				<Image
					width='99.638236pt'
					maxW='150px'
					src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!-- Generated by CodeCogs with dvisvgm 2.9.1 --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23ffffff' width='99.638236pt' height='31.172242pt' viewBox='-.239051 -.227993 99.638236 31.172242'%3E%3Cdefs%3E%3Cpath id='g0-3' d='M3.287671-5.104857C3.299626-5.272229 3.299626-5.559153 2.988792-5.559153C2.797509-5.559153 2.642092-5.403736 2.677958-5.248319V-5.092902L2.84533-3.239851L1.315068-4.351681C1.207472-4.411457 1.183562-4.435367 1.099875-4.435367C.932503-4.435367 .777086-4.267995 .777086-4.100623C.777086-3.90934 .896638-3.861519 1.016189-3.801743L2.713823-2.988792L1.06401-2.187796C.872727-2.092154 .777086-2.044334 .777086-1.865006S.932503-1.530262 1.099875-1.530262C1.183562-1.530262 1.207472-1.530262 1.506351-1.75741L2.84533-2.725778L2.666002-.71731C2.666002-.466252 2.881196-.406476 2.976837-.406476C3.120299-.406476 3.299626-.490162 3.299626-.71731L3.120299-2.725778L4.65056-1.613948C4.758157-1.554172 4.782067-1.530262 4.865753-1.530262C5.033126-1.530262 5.188543-1.697634 5.188543-1.865006C5.188543-2.044334 5.080946-2.10411 4.937484-2.175841C4.220174-2.534496 4.196264-2.534496 3.251806-2.976837L4.901619-3.777833C5.092902-3.873474 5.188543-3.921295 5.188543-4.100623S5.033126-4.435367 4.865753-4.435367C4.782067-4.435367 4.758157-4.435367 4.459278-4.208219L3.120299-3.239851L3.287671-5.104857Z'/%3E%3Cpath id='g2-40' d='M3.88543 2.905106C3.88543 2.86924 3.88543 2.84533 3.682192 2.642092C2.486675 1.43462 1.817186-.537983 1.817186-2.976837C1.817186-5.296139 2.379078-7.292653 3.765878-8.703362C3.88543-8.810959 3.88543-8.834869 3.88543-8.870735C3.88543-8.942466 3.825654-8.966376 3.777833-8.966376C3.622416-8.966376 2.642092-8.105604 2.056289-6.933998C1.446575-5.726526 1.171606-4.447323 1.171606-2.976837C1.171606-1.912827 1.338979-.490162 1.960648 .789041C2.666002 2.223661 3.646326 3.000747 3.777833 3.000747C3.825654 3.000747 3.88543 2.976837 3.88543 2.905106Z'/%3E%3Cpath id='g2-41' d='M3.371357-2.976837C3.371357-3.88543 3.251806-5.36787 2.582316-6.75467C1.876961-8.18929 .896638-8.966376 .765131-8.966376C.71731-8.966376 .657534-8.942466 .657534-8.870735C.657534-8.834869 .657534-8.810959 .860772-8.607721C2.056289-7.400249 2.725778-5.427646 2.725778-2.988792C2.725778-.669489 2.163885 1.327024 .777086 2.737733C.657534 2.84533 .657534 2.86924 .657534 2.905106C.657534 2.976837 .71731 3.000747 .765131 3.000747C.920548 3.000747 1.900872 2.139975 2.486675 .968369C3.096389-.251059 3.371357-1.542217 3.371357-2.976837Z'/%3E%3Cpath id='g2-43' d='M4.770112-2.761644H8.069738C8.237111-2.761644 8.452304-2.761644 8.452304-2.976837C8.452304-3.203985 8.249066-3.203985 8.069738-3.203985H4.770112V-6.503611C4.770112-6.670984 4.770112-6.886177 4.554919-6.886177C4.327771-6.886177 4.327771-6.682939 4.327771-6.503611V-3.203985H1.028144C.860772-3.203985 .645579-3.203985 .645579-2.988792C.645579-2.761644 .848817-2.761644 1.028144-2.761644H4.327771V.537983C4.327771 .705355 4.327771 .920548 4.542964 .920548C4.770112 .920548 4.770112 .71731 4.770112 .537983V-2.761644Z'/%3E%3Cpath id='g2-50' d='M5.260274-2.008468H4.99726C4.961395-1.80523 4.865753-1.147696 4.746202-.956413C4.662516-.848817 3.981071-.848817 3.622416-.848817H1.41071C1.733499-1.123786 2.462765-1.888917 2.773599-2.175841C4.590785-3.849564 5.260274-4.471233 5.260274-5.654795C5.260274-7.029639 4.172354-7.950187 2.785554-7.950187S.585803-6.766625 .585803-5.738481C.585803-5.128767 1.111831-5.128767 1.147696-5.128767C1.398755-5.128767 1.709589-5.308095 1.709589-5.69066C1.709589-6.025405 1.482441-6.252553 1.147696-6.252553C1.0401-6.252553 1.016189-6.252553 .980324-6.240598C1.207472-7.053549 1.853051-7.603487 2.630137-7.603487C3.646326-7.603487 4.267995-6.75467 4.267995-5.654795C4.267995-4.638605 3.682192-3.753923 3.000747-2.988792L.585803-.286924V0H4.94944L5.260274-2.008468Z'/%3E%3Cpath id='g2-61' d='M8.069738-3.873474C8.237111-3.873474 8.452304-3.873474 8.452304-4.088667C8.452304-4.315816 8.249066-4.315816 8.069738-4.315816H1.028144C.860772-4.315816 .645579-4.315816 .645579-4.100623C.645579-3.873474 .848817-3.873474 1.028144-3.873474H8.069738ZM8.069738-1.649813C8.237111-1.649813 8.452304-1.649813 8.452304-1.865006C8.452304-2.092154 8.249066-2.092154 8.069738-2.092154H1.028144C.860772-2.092154 .645579-2.092154 .645579-1.876961C.645579-1.649813 .848817-1.649813 1.028144-1.649813H8.069738Z'/%3E%3Cpath id='g1-66' d='M4.375592-7.352428C4.483188-7.79477 4.531009-7.81868 4.99726-7.81868H6.551432C7.902366-7.81868 7.902366-6.670984 7.902366-6.563387C7.902366-5.595019 6.933998-4.363636 5.355915-4.363636H3.634371L4.375592-7.352428ZM6.396015-4.267995C7.699128-4.507098 8.88269-5.415691 8.88269-6.515567C8.88269-7.44807 8.057783-8.16538 6.706849-8.16538H2.86924C2.642092-8.16538 2.534496-8.16538 2.534496-7.938232C2.534496-7.81868 2.642092-7.81868 2.82142-7.81868C3.550685-7.81868 3.550685-7.723039 3.550685-7.591532C3.550685-7.567621 3.550685-7.49589 3.502864-7.316563L1.888917-.884682C1.78132-.466252 1.75741-.3467 .920548-.3467C.6934-.3467 .573848-.3467 .573848-.131507C.573848 0 .645579 0 .884682 0H4.985305C6.814446 0 8.225156-1.3868 8.225156-2.594271C8.225156-3.574595 7.364384-4.172354 6.396015-4.267995ZM4.698381-.3467H3.084433C2.917061-.3467 2.893151-.3467 2.82142-.358655C2.689913-.37061 2.677958-.394521 2.677958-.490162C2.677958-.573848 2.701868-.645579 2.725778-.753176L3.56264-4.124533H5.810212C7.220922-4.124533 7.220922-2.809465 7.220922-2.713823C7.220922-1.566127 6.180822-.3467 4.698381-.3467Z'/%3E%3Cpath id='g1-80' d='M3.53873-3.801743H5.547198C7.197011-3.801743 8.846824-5.021171 8.846824-6.38406C8.846824-7.316563 8.057783-8.16538 6.551432-8.16538H2.857285C2.630137-8.16538 2.52254-8.16538 2.52254-7.938232C2.52254-7.81868 2.630137-7.81868 2.809465-7.81868C3.53873-7.81868 3.53873-7.723039 3.53873-7.591532C3.53873-7.567621 3.53873-7.49589 3.490909-7.316563L1.876961-.884682C1.769365-.466252 1.745455-.3467 .908593-.3467C.681445-.3467 .561893-.3467 .561893-.131507C.561893 0 .669489 0 .74122 0C.968369 0 1.207472-.02391 1.43462-.02391H2.833375C3.060523-.02391 3.311582 0 3.53873 0C3.634371 0 3.765878 0 3.765878-.227148C3.765878-.3467 3.658281-.3467 3.478954-.3467C2.761644-.3467 2.749689-.430386 2.749689-.549938C2.749689-.609714 2.761644-.6934 2.773599-.753176L3.53873-3.801743ZM4.399502-7.352428C4.507098-7.79477 4.554919-7.81868 5.021171-7.81868H6.204732C7.10137-7.81868 7.84259-7.531756 7.84259-6.635118C7.84259-6.324284 7.687173-5.308095 7.137235-4.758157C6.933998-4.542964 6.360149-4.088667 5.272229-4.088667H3.58655L4.399502-7.352428Z'/%3E%3Cpath id='g1-98' d='M2.761644-7.998007C2.773599-8.045828 2.797509-8.117559 2.797509-8.177335C2.797509-8.296887 2.677958-8.296887 2.654047-8.296887C2.642092-8.296887 2.211706-8.261021 1.996513-8.237111C1.793275-8.225156 1.613948-8.201245 1.398755-8.18929C1.111831-8.16538 1.028144-8.153425 1.028144-7.938232C1.028144-7.81868 1.147696-7.81868 1.267248-7.81868C1.876961-7.81868 1.876961-7.711083 1.876961-7.591532C1.876961-7.507846 1.78132-7.161146 1.733499-6.945953L1.446575-5.798257C1.327024-5.32005 .645579-2.606227 .597758-2.391034C.537983-2.092154 .537983-1.888917 .537983-1.733499C.537983-.514072 1.219427 .119552 1.996513 .119552C3.383313 .119552 4.817933-1.661768 4.817933-3.395268C4.817933-4.495143 4.196264-5.272229 3.299626-5.272229C2.677958-5.272229 2.116065-4.758157 1.888917-4.519054L2.761644-7.998007ZM2.008468-.119552C1.625903-.119552 1.207472-.406476 1.207472-1.338979C1.207472-1.733499 1.243337-1.960648 1.458531-2.797509C1.494396-2.952927 1.685679-3.718057 1.733499-3.873474C1.75741-3.969116 2.462765-5.033126 3.275716-5.033126C3.801743-5.033126 4.040847-4.507098 4.040847-3.88543C4.040847-3.311582 3.706102-1.960648 3.407223-1.338979C3.108344-.6934 2.558406-.119552 2.008468-.119552Z'/%3E%3Cpath id='g1-105' d='M3.383313-1.709589C3.383313-1.769365 3.335492-1.817186 3.263761-1.817186C3.156164-1.817186 3.144209-1.78132 3.084433-1.578082C2.773599-.490162 2.283437-.119552 1.888917-.119552C1.745455-.119552 1.578082-.155417 1.578082-.514072C1.578082-.836862 1.721544-1.195517 1.853051-1.554172L2.689913-3.777833C2.725778-3.873474 2.809465-4.088667 2.809465-4.315816C2.809465-4.817933 2.450809-5.272229 1.865006-5.272229C.765131-5.272229 .32279-3.53873 .32279-3.443088C.32279-3.395268 .37061-3.335492 .454296-3.335492C.561893-3.335492 .573848-3.383313 .621669-3.550685C.908593-4.554919 1.362889-5.033126 1.829141-5.033126C1.936737-5.033126 2.139975-5.021171 2.139975-4.638605C2.139975-4.327771 1.984558-3.93325 1.888917-3.670237L1.052055-1.446575C.980324-1.255293 .908593-1.06401 .908593-.848817C.908593-.310834 1.279203 .119552 1.853051 .119552C2.952927 .119552 3.383313-1.625903 3.383313-1.709589ZM3.287671-7.460025C3.287671-7.639352 3.144209-7.854545 2.881196-7.854545C2.606227-7.854545 2.295392-7.591532 2.295392-7.280697C2.295392-6.981818 2.546451-6.886177 2.689913-6.886177C3.012702-6.886177 3.287671-7.197011 3.287671-7.460025Z'/%3E%3Cpath id='g1-110' d='M2.462765-3.502864C2.486675-3.574595 2.785554-4.172354 3.227895-4.554919C3.53873-4.841843 3.945205-5.033126 4.411457-5.033126C4.889664-5.033126 5.057036-4.674471 5.057036-4.196264C5.057036-3.514819 4.566874-2.15193 4.327771-1.506351C4.220174-1.219427 4.160399-1.06401 4.160399-.848817C4.160399-.310834 4.531009 .119552 5.104857 .119552C6.216687 .119552 6.635118-1.637858 6.635118-1.709589C6.635118-1.769365 6.587298-1.817186 6.515567-1.817186C6.40797-1.817186 6.396015-1.78132 6.336239-1.578082C6.06127-.597758 5.606974-.119552 5.140722-.119552C5.021171-.119552 4.829888-.131507 4.829888-.514072C4.829888-.812951 4.961395-1.171606 5.033126-1.338979C5.272229-1.996513 5.774346-3.335492 5.774346-4.016936C5.774346-4.734247 5.355915-5.272229 4.447323-5.272229C3.383313-5.272229 2.82142-4.519054 2.606227-4.220174C2.570361-4.901619 2.080199-5.272229 1.554172-5.272229C1.171606-5.272229 .908593-5.045081 .705355-4.638605C.490162-4.208219 .32279-3.490909 .32279-3.443088S.37061-3.335492 .454296-3.335492C.549938-3.335492 .561893-3.347447 .633624-3.622416C.824907-4.351681 1.0401-5.033126 1.518306-5.033126C1.793275-5.033126 1.888917-4.841843 1.888917-4.483188C1.888917-4.220174 1.769365-3.753923 1.685679-3.383313L1.350934-2.092154C1.303113-1.865006 1.171606-1.327024 1.111831-1.111831C1.028144-.800996 .896638-.239103 .896638-.179328C.896638-.011955 1.028144 .119552 1.207472 .119552C1.350934 .119552 1.518306 .047821 1.613948-.131507C1.637858-.191283 1.745455-.609714 1.80523-.848817L2.068244-1.924782L2.462765-3.502864Z'/%3E%3Cpath id='g1-115' d='M2.725778-2.391034C2.929016-2.355168 3.251806-2.283437 3.323537-2.271482C3.478954-2.223661 4.016936-2.032379 4.016936-1.458531C4.016936-1.08792 3.682192-.119552 2.295392-.119552C2.044334-.119552 1.147696-.155417 .908593-.812951C1.3868-.753176 1.625903-1.123786 1.625903-1.3868C1.625903-1.637858 1.458531-1.769365 1.219427-1.769365C.956413-1.769365 .609714-1.566127 .609714-1.028144C.609714-.32279 1.327024 .119552 2.283437 .119552C4.100623 .119552 4.638605-1.219427 4.638605-1.841096C4.638605-2.020423 4.638605-2.355168 4.25604-2.737733C3.957161-3.024658 3.670237-3.084433 3.024658-3.21594C2.701868-3.287671 2.187796-3.395268 2.187796-3.93325C2.187796-4.172354 2.402989-5.033126 3.53873-5.033126C4.040847-5.033126 4.531009-4.841843 4.65056-4.411457C4.124533-4.411457 4.100623-3.957161 4.100623-3.945205C4.100623-3.694147 4.327771-3.622416 4.435367-3.622416C4.60274-3.622416 4.937484-3.753923 4.937484-4.25604S4.483188-5.272229 3.550685-5.272229C1.984558-5.272229 1.566127-4.040847 1.566127-3.550685C1.566127-2.642092 2.450809-2.450809 2.725778-2.391034Z'/%3E%3Cpath id='g1-116' d='M2.402989-4.805978H3.502864C3.730012-4.805978 3.849564-4.805978 3.849564-5.021171C3.849564-5.152677 3.777833-5.152677 3.53873-5.152677H2.486675L2.929016-6.898132C2.976837-7.065504 2.976837-7.089415 2.976837-7.173101C2.976837-7.364384 2.82142-7.47198 2.666002-7.47198C2.570361-7.47198 2.295392-7.436115 2.199751-7.053549L1.733499-5.152677H.609714C.37061-5.152677 .263014-5.152677 .263014-4.925529C.263014-4.805978 .3467-4.805978 .573848-4.805978H1.637858L.848817-1.649813C.753176-1.231382 .71731-1.111831 .71731-.956413C.71731-.394521 1.111831 .119552 1.78132 .119552C2.988792 .119552 3.634371-1.625903 3.634371-1.709589C3.634371-1.78132 3.58655-1.817186 3.514819-1.817186C3.490909-1.817186 3.443088-1.817186 3.419178-1.769365C3.407223-1.75741 3.395268-1.745455 3.311582-1.554172C3.060523-.956413 2.510585-.119552 1.817186-.119552C1.458531-.119552 1.43462-.418431 1.43462-.681445C1.43462-.6934 1.43462-.920548 1.470486-1.06401L2.402989-4.805978Z'/%3E%3Cpath id='g1-117' d='M4.076712-.6934C4.23213-.02391 4.805978 .119552 5.092902 .119552C5.475467 .119552 5.762391-.131507 5.953674-.537983C6.156912-.968369 6.312329-1.673724 6.312329-1.709589C6.312329-1.769365 6.264508-1.817186 6.192777-1.817186C6.085181-1.817186 6.073225-1.75741 6.025405-1.578082C5.810212-.753176 5.595019-.119552 5.116812-.119552C4.758157-.119552 4.758157-.514072 4.758157-.669489C4.758157-.944458 4.794022-1.06401 4.913574-1.566127C4.99726-1.888917 5.080946-2.211706 5.152677-2.546451L5.642839-4.495143C5.726526-4.794022 5.726526-4.817933 5.726526-4.853798C5.726526-5.033126 5.583064-5.152677 5.403736-5.152677C5.057036-5.152677 4.97335-4.853798 4.901619-4.554919C4.782067-4.088667 4.136488-1.518306 4.052802-1.099875C4.040847-1.099875 3.574595-.119552 2.701868-.119552C2.080199-.119552 1.960648-.657534 1.960648-1.099875C1.960648-1.78132 2.295392-2.737733 2.606227-3.53873C2.749689-3.921295 2.809465-4.076712 2.809465-4.315816C2.809465-4.829888 2.438854-5.272229 1.865006-5.272229C.765131-5.272229 .32279-3.53873 .32279-3.443088C.32279-3.395268 .37061-3.335492 .454296-3.335492C.561893-3.335492 .573848-3.383313 .621669-3.550685C.908593-4.578829 1.374844-5.033126 1.829141-5.033126C1.948692-5.033126 2.139975-5.021171 2.139975-4.638605C2.139975-4.327771 2.008468-3.981071 1.829141-3.526775C1.303113-2.10411 1.243337-1.649813 1.243337-1.291158C1.243337-.071731 2.163885 .119552 2.654047 .119552C3.419178 .119552 3.837609-.406476 4.076712-.6934Z'/%3E%3C/defs%3E%3Cg id='page1' transform='matrix(1.13 0 0 1.13 -63.986043 -61.026004)'%3E%3Cuse x='56.413267' y='70.188195' xlink:href='%23g1-117'/%3E%3Cuse x='63.075707' y='70.188195' xlink:href='%23g1-110'/%3E%3Cuse x='70.063312' y='70.188195' xlink:href='%23g1-105'/%3E%3Cuse x='74.056745' y='70.188195' xlink:href='%23g1-116'/%3E%3Cuse x='78.283904' y='70.188195' xlink:href='%23g1-115'/%3E%3Cuse x='87.118739' y='70.188195' xlink:href='%23g2-61'/%3E%3Cuse x='109.944656' y='62.100436' xlink:href='%23g1-80'/%3E%3Cuse x='121.772418' y='62.100436' xlink:href='%23g0-3'/%3E%3Cuse x='130.406689' y='62.100436' xlink:href='%23g1-98'/%3E%3Crect x='100.739734' y='66.960309' height='.478187' width='43.848964'/%3E%3Cuse x='100.739734' y='78.388857' xlink:href='%23g2-50'/%3E%3Cuse x='106.592724' y='78.388857' xlink:href='%23g2-40'/%3E%3Cuse x='111.14505' y='78.388857' xlink:href='%23g1-98'/%3E%3Cuse x='118.778819' y='78.388857' xlink:href='%23g2-43'/%3E%3Cuse x='130.540134' y='78.388857' xlink:href='%23g1-66'/%3E%3Cuse x='140.036395' y='78.388857' xlink:href='%23g2-41'/%3E%3C/g%3E%3C/svg%3E"
				/><br/>
				P: existingUnits;<br/>
				b: inputBase; B: baseBalance;<br/>
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				Since synths always have 1:1 purchasing power they do not accrue Impermanent Loss or Yield. In
fact, any loss or gain is absorbed by the other passive LPs. With IL Protection, other passive LPs
should never be affected by this.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				Synthetic Assets can be staked to earn an interest rate, or used as collateral for borrowing. Since
synths are 50% collateralized by the real assets and 50% collateralized by USDV or VADER, heavy
adoption of synths deepens the liquidity pools and allows the system to naturally scale (or contract).
				</Box>
				<Heading as='h2' size='xs' textStyle='noLigs'>Lending</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Members can lock up collateral, which includes VADER, USDV or any synthetic asset.
VADER/USDPYV is taken from the reserve and swapped out to the debt asset. The member’s collateral
is added to a collateral pool, and their debt recorded. Since there is global collateral pool, members
can not adjust collateral rate themselves - all debt 1s issued at 150% collateralization when minted.
Interest is charged against the collateral and paid into the pools of the associated debt asset. A member
can unlock their collateral by returning their debt amount. If the collateral drops below the debt value,
then anyone can partially liquidate the pool of collateral, set at 10% each time.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				The Interest Rate is set to be proportional to the debt loading of the system, so the more debt is issued,
the higher the rate, which provides a natural throttle. Interest payments are made daily and synced into
pool balances, which should drive up yield for LPs and encourage deeper liquidity. This will in turn
reduce the interest rate:
				</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
				interestRate = debtIssued / assetDepth
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				The interest paid is tracked, such that when a member leaves, their redeemed collateral is their deposit
minus their share of the paid interest. If the paid interest for a member is within 99% of their
collateral, anyone can purge that member and claim the final 1% collateral. This will stop a build up
of members who have consumed all their collateral in interest, but never leave, which adversely
affects the accounting for the remaining members.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
				The share of interest is tracked by an accumulator which multiplies time by collateral sizing
(priceTime). This is updated each time a member borrows or repays, and their share of the interest
corresponds to their share of the accumulated priceTime.
				</Box>
				<Box as='p' textAlign='justify' textStyle='p' fontSize='1.05rem' fontStyle='italic'>
				interestShare = memberPriceTime / (systemPriceTime + accumulatedPriceTime)
				</Box>
				<Heading as='h2' size='xs' textStyle='noLigs'>Liveness</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
					The system is able to conduct its own servicing:
					<ul style={{ paddingLeft: '2rem' }}>
							<li style={{ paddingLeft: '3px' }}>Pay the Daily Emission Rate</li>
							<li style={{ paddingLeft: '3px' }}>Pay the Dividends</li>
							<li style={{ paddingLeft: '3px' }}>Liquidate collateral 10% at a time</li>
							<li style={{ paddingLeft: '3px' }}>Pay the Daily Interest Rate</li>
						</ul>
				</Box>
				<Box as='p' textAlign='justify' textStyle='p'>
					This is done by piggy-backing VADER transfers, USDV transfers and ROUTER actions which query
	a condition and execute. The member making the transfer/action will subsidise the gas cost at that
	time. If they don’t wish to pay the gas, they can wait for someone else to do it.
				</Box>
				<Heading as='h2' size='xs' textStyle='noLigs'>Reserve</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				The VADER Vault contract has a reserve, which 1s topped up by emissions every day, and consumed
by incentives, IL Protection and borrowers. This is to ensure the emission rate of VADER is
programmed and immutable, and is not dependent on downstream requirements. As such, under heavy
demand, the Reserve can go to 0, in which case incentives, protection and lending will stop for the
rest of the day. This is a throttle on the system, preventing run-away inflation.
				</Box>
				<Heading as='h2' size='xs' textStyle='noLigs'>Governance</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				System parameters can be tweaked by DAO Governance, but this is strictly limited. The DAO can be
purged by itself if the system is stable and no more parameters need tweaking. During the bootstrap
period, the DEPLOYER will retain the ability to skip DAO governance, which can be purged by
anyone after 3 months. A liquidity limit will be in place at the same time. The reserve of USDV in the
USDV contract pays USDV stakers, who can decide to pay out grant funding to anyone in the
ecosystem, (limited to 10% at a time).
				</Box>
				<Heading as='h2' size='xs'>Conclusion</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				VADER is an incentivised, governance-minimal and cohesive liquidity protocol that can scale itself
sustainably. A&nbsp;stablecoin is issued by burning VADER, which itself is priced against the median of a
group of anchor pools. This stablecoin allows the bearer to earn interest, as well as being the
settlement asset in most of its liquidity pools. Liquidity providers are entitled to Impermanent Loss
protection whilst they are in the pools. All pools receive daily liquidity incentives. A lending design
allows members of pools and holders of VADER to lock up collateral to borrow debt against.
				</Box>
			</Box>
		</>
	)
}

export default WhitePaper