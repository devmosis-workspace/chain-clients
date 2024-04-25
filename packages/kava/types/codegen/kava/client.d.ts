import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const kavaAminoConverters: {
    "/kava.swap.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./swap/v1beta1/tx").MsgDeposit) => import("./swap/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./swap/v1beta1/tx").MsgDepositAmino) => import("./swap/v1beta1/tx").MsgDeposit;
    };
    "/kava.swap.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./swap/v1beta1/tx").MsgWithdraw) => import("./swap/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./swap/v1beta1/tx").MsgWithdrawAmino) => import("./swap/v1beta1/tx").MsgWithdraw;
    };
    "/kava.swap.v1beta1.MsgSwapExactForTokens": {
        aminoType: string;
        toAmino: (message: import("./swap/v1beta1/tx").MsgSwapExactForTokens) => import("./swap/v1beta1/tx").MsgSwapExactForTokensAmino;
        fromAmino: (object: import("./swap/v1beta1/tx").MsgSwapExactForTokensAmino) => import("./swap/v1beta1/tx").MsgSwapExactForTokens;
    };
    "/kava.swap.v1beta1.MsgSwapForExactTokens": {
        aminoType: string;
        toAmino: (message: import("./swap/v1beta1/tx").MsgSwapForExactTokens) => import("./swap/v1beta1/tx").MsgSwapForExactTokensAmino;
        fromAmino: (object: import("./swap/v1beta1/tx").MsgSwapForExactTokensAmino) => import("./swap/v1beta1/tx").MsgSwapForExactTokens;
    };
    "/kava.savings.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./savings/v1beta1/tx").MsgDeposit) => import("./savings/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./savings/v1beta1/tx").MsgDepositAmino) => import("./savings/v1beta1/tx").MsgDeposit;
    };
    "/kava.savings.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./savings/v1beta1/tx").MsgWithdraw) => import("./savings/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./savings/v1beta1/tx").MsgWithdrawAmino) => import("./savings/v1beta1/tx").MsgWithdraw;
    };
    "/kava.router.v1beta1.MsgMintDeposit": {
        aminoType: string;
        toAmino: (message: import("./router/v1beta1/tx").MsgMintDeposit) => import("./router/v1beta1/tx").MsgMintDepositAmino;
        fromAmino: (object: import("./router/v1beta1/tx").MsgMintDepositAmino) => import("./router/v1beta1/tx").MsgMintDeposit;
    };
    "/kava.router.v1beta1.MsgDelegateMintDeposit": {
        aminoType: string;
        toAmino: (message: import("./router/v1beta1/tx").MsgDelegateMintDeposit) => import("./router/v1beta1/tx").MsgDelegateMintDepositAmino;
        fromAmino: (object: import("./router/v1beta1/tx").MsgDelegateMintDepositAmino) => import("./router/v1beta1/tx").MsgDelegateMintDeposit;
    };
    "/kava.router.v1beta1.MsgWithdrawBurn": {
        aminoType: string;
        toAmino: (message: import("./router/v1beta1/tx").MsgWithdrawBurn) => import("./router/v1beta1/tx").MsgWithdrawBurnAmino;
        fromAmino: (object: import("./router/v1beta1/tx").MsgWithdrawBurnAmino) => import("./router/v1beta1/tx").MsgWithdrawBurn;
    };
    "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
        aminoType: string;
        toAmino: (message: import("./router/v1beta1/tx").MsgWithdrawBurnUndelegate) => import("./router/v1beta1/tx").MsgWithdrawBurnUndelegateAmino;
        fromAmino: (object: import("./router/v1beta1/tx").MsgWithdrawBurnUndelegateAmino) => import("./router/v1beta1/tx").MsgWithdrawBurnUndelegate;
    };
    "/kava.pricefeed.v1beta1.MsgPostPrice": {
        aminoType: string;
        toAmino: (message: import("./pricefeed/v1beta1/tx").MsgPostPrice) => import("./pricefeed/v1beta1/tx").MsgPostPriceAmino;
        fromAmino: (object: import("./pricefeed/v1beta1/tx").MsgPostPriceAmino) => import("./pricefeed/v1beta1/tx").MsgPostPrice;
    };
    "/kava.liquid.v1beta1.MsgMintDerivative": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgMintDerivative) => import("./liquid/v1beta1/tx").MsgMintDerivativeAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgMintDerivativeAmino) => import("./liquid/v1beta1/tx").MsgMintDerivative;
    };
    "/kava.liquid.v1beta1.MsgBurnDerivative": {
        aminoType: string;
        toAmino: (message: import("./liquid/v1beta1/tx").MsgBurnDerivative) => import("./liquid/v1beta1/tx").MsgBurnDerivativeAmino;
        fromAmino: (object: import("./liquid/v1beta1/tx").MsgBurnDerivativeAmino) => import("./liquid/v1beta1/tx").MsgBurnDerivative;
    };
    "/kava.issuance.v1beta1.MsgIssueTokens": {
        aminoType: string;
        toAmino: (message: import("./issuance/v1beta1/tx").MsgIssueTokens) => import("./issuance/v1beta1/tx").MsgIssueTokensAmino;
        fromAmino: (object: import("./issuance/v1beta1/tx").MsgIssueTokensAmino) => import("./issuance/v1beta1/tx").MsgIssueTokens;
    };
    "/kava.issuance.v1beta1.MsgRedeemTokens": {
        aminoType: string;
        toAmino: (message: import("./issuance/v1beta1/tx").MsgRedeemTokens) => import("./issuance/v1beta1/tx").MsgRedeemTokensAmino;
        fromAmino: (object: import("./issuance/v1beta1/tx").MsgRedeemTokensAmino) => import("./issuance/v1beta1/tx").MsgRedeemTokens;
    };
    "/kava.issuance.v1beta1.MsgBlockAddress": {
        aminoType: string;
        toAmino: (message: import("./issuance/v1beta1/tx").MsgBlockAddress) => import("./issuance/v1beta1/tx").MsgBlockAddressAmino;
        fromAmino: (object: import("./issuance/v1beta1/tx").MsgBlockAddressAmino) => import("./issuance/v1beta1/tx").MsgBlockAddress;
    };
    "/kava.issuance.v1beta1.MsgUnblockAddress": {
        aminoType: string;
        toAmino: (message: import("./issuance/v1beta1/tx").MsgUnblockAddress) => import("./issuance/v1beta1/tx").MsgUnblockAddressAmino;
        fromAmino: (object: import("./issuance/v1beta1/tx").MsgUnblockAddressAmino) => import("./issuance/v1beta1/tx").MsgUnblockAddress;
    };
    "/kava.issuance.v1beta1.MsgSetPauseStatus": {
        aminoType: string;
        toAmino: (message: import("./issuance/v1beta1/tx").MsgSetPauseStatus) => import("./issuance/v1beta1/tx").MsgSetPauseStatusAmino;
        fromAmino: (object: import("./issuance/v1beta1/tx").MsgSetPauseStatusAmino) => import("./issuance/v1beta1/tx").MsgSetPauseStatus;
    };
    "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimUSDXMintingReward) => import("./incentive/v1beta1/tx").MsgClaimUSDXMintingRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimUSDXMintingRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimUSDXMintingReward;
    };
    "/kava.incentive.v1beta1.MsgClaimHardReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimHardReward) => import("./incentive/v1beta1/tx").MsgClaimHardRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimHardRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimHardReward;
    };
    "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimDelegatorReward) => import("./incentive/v1beta1/tx").MsgClaimDelegatorRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimDelegatorRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimDelegatorReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSwapReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimSwapReward) => import("./incentive/v1beta1/tx").MsgClaimSwapRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimSwapRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimSwapReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimSavingsReward) => import("./incentive/v1beta1/tx").MsgClaimSavingsRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimSavingsRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimSavingsReward;
    };
    "/kava.incentive.v1beta1.MsgClaimEarnReward": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1beta1/tx").MsgClaimEarnReward) => import("./incentive/v1beta1/tx").MsgClaimEarnRewardAmino;
        fromAmino: (object: import("./incentive/v1beta1/tx").MsgClaimEarnRewardAmino) => import("./incentive/v1beta1/tx").MsgClaimEarnReward;
    };
    "/kava.hard.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./hard/v1beta1/tx").MsgDeposit) => import("./hard/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./hard/v1beta1/tx").MsgDepositAmino) => import("./hard/v1beta1/tx").MsgDeposit;
    };
    "/kava.hard.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./hard/v1beta1/tx").MsgWithdraw) => import("./hard/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./hard/v1beta1/tx").MsgWithdrawAmino) => import("./hard/v1beta1/tx").MsgWithdraw;
    };
    "/kava.hard.v1beta1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: import("./hard/v1beta1/tx").MsgBorrow) => import("./hard/v1beta1/tx").MsgBorrowAmino;
        fromAmino: (object: import("./hard/v1beta1/tx").MsgBorrowAmino) => import("./hard/v1beta1/tx").MsgBorrow;
    };
    "/kava.hard.v1beta1.MsgRepay": {
        aminoType: string;
        toAmino: (message: import("./hard/v1beta1/tx").MsgRepay) => import("./hard/v1beta1/tx").MsgRepayAmino;
        fromAmino: (object: import("./hard/v1beta1/tx").MsgRepayAmino) => import("./hard/v1beta1/tx").MsgRepay;
    };
    "/kava.hard.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: import("./hard/v1beta1/tx").MsgLiquidate) => import("./hard/v1beta1/tx").MsgLiquidateAmino;
        fromAmino: (object: import("./hard/v1beta1/tx").MsgLiquidateAmino) => import("./hard/v1beta1/tx").MsgLiquidate;
    };
    "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
        aminoType: string;
        toAmino: (message: import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20) => import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20Amino;
        fromAmino: (object: import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20Amino) => import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
        aminoType: string;
        toAmino: (message: import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoin) => import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoinAmino;
        fromAmino: (object: import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoinAmino) => import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoin;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
        aminoType: string;
        toAmino: (message: import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinToERC20) => import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinToERC20Amino;
        fromAmino: (object: import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinToERC20Amino) => import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
        aminoType: string;
        toAmino: (message: import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinFromERC20) => import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinFromERC20Amino;
        fromAmino: (object: import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinFromERC20Amino) => import("./evmutil/v1beta1/tx").MsgConvertCosmosCoinFromERC20;
    };
    "/kava.earn.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./earn/v1beta1/tx").MsgDeposit) => import("./earn/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./earn/v1beta1/tx").MsgDepositAmino) => import("./earn/v1beta1/tx").MsgDeposit;
    };
    "/kava.earn.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./earn/v1beta1/tx").MsgWithdraw) => import("./earn/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./earn/v1beta1/tx").MsgWithdrawAmino) => import("./earn/v1beta1/tx").MsgWithdraw;
    };
    "/kava.community.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: (message: import("./community/v1beta1/tx").MsgFundCommunityPool) => import("./community/v1beta1/tx").MsgFundCommunityPoolAmino;
        fromAmino: (object: import("./community/v1beta1/tx").MsgFundCommunityPoolAmino) => import("./community/v1beta1/tx").MsgFundCommunityPool;
    };
    "/kava.community.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./community/v1beta1/tx").MsgUpdateParams) => import("./community/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./community/v1beta1/tx").MsgUpdateParamsAmino) => import("./community/v1beta1/tx").MsgUpdateParams;
    };
    "/kava.committee.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: (message: import("./committee/v1beta1/tx").MsgSubmitProposal) => import("./committee/v1beta1/tx").MsgSubmitProposalAmino;
        fromAmino: (object: import("./committee/v1beta1/tx").MsgSubmitProposalAmino) => import("./committee/v1beta1/tx").MsgSubmitProposal;
    };
    "/kava.committee.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: (message: import("./committee/v1beta1/tx").MsgVote) => import("./committee/v1beta1/tx").MsgVoteAmino;
        fromAmino: (object: import("./committee/v1beta1/tx").MsgVoteAmino) => import("./committee/v1beta1/tx").MsgVote;
    };
    "/kava.cdp.v1beta1.MsgCreateCDP": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgCreateCDP) => import("./cdp/v1beta1/tx").MsgCreateCDPAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgCreateCDPAmino) => import("./cdp/v1beta1/tx").MsgCreateCDP;
    };
    "/kava.cdp.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgDeposit) => import("./cdp/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgDepositAmino) => import("./cdp/v1beta1/tx").MsgDeposit;
    };
    "/kava.cdp.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgWithdraw) => import("./cdp/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgWithdrawAmino) => import("./cdp/v1beta1/tx").MsgWithdraw;
    };
    "/kava.cdp.v1beta1.MsgDrawDebt": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgDrawDebt) => import("./cdp/v1beta1/tx").MsgDrawDebtAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgDrawDebtAmino) => import("./cdp/v1beta1/tx").MsgDrawDebt;
    };
    "/kava.cdp.v1beta1.MsgRepayDebt": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgRepayDebt) => import("./cdp/v1beta1/tx").MsgRepayDebtAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgRepayDebtAmino) => import("./cdp/v1beta1/tx").MsgRepayDebt;
    };
    "/kava.cdp.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: import("./cdp/v1beta1/tx").MsgLiquidate) => import("./cdp/v1beta1/tx").MsgLiquidateAmino;
        fromAmino: (object: import("./cdp/v1beta1/tx").MsgLiquidateAmino) => import("./cdp/v1beta1/tx").MsgLiquidate;
    };
    "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
        aminoType: string;
        toAmino: (message: import("./bep3/v1beta1/tx").MsgCreateAtomicSwap) => import("./bep3/v1beta1/tx").MsgCreateAtomicSwapAmino;
        fromAmino: (object: import("./bep3/v1beta1/tx").MsgCreateAtomicSwapAmino) => import("./bep3/v1beta1/tx").MsgCreateAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
        aminoType: string;
        toAmino: (message: import("./bep3/v1beta1/tx").MsgClaimAtomicSwap) => import("./bep3/v1beta1/tx").MsgClaimAtomicSwapAmino;
        fromAmino: (object: import("./bep3/v1beta1/tx").MsgClaimAtomicSwapAmino) => import("./bep3/v1beta1/tx").MsgClaimAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
        aminoType: string;
        toAmino: (message: import("./bep3/v1beta1/tx").MsgRefundAtomicSwap) => import("./bep3/v1beta1/tx").MsgRefundAtomicSwapAmino;
        fromAmino: (object: import("./bep3/v1beta1/tx").MsgRefundAtomicSwapAmino) => import("./bep3/v1beta1/tx").MsgRefundAtomicSwap;
    };
    "/kava.auction.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: (message: import("./auction/v1beta1/tx").MsgPlaceBid) => import("./auction/v1beta1/tx").MsgPlaceBidAmino;
        fromAmino: (object: import("./auction/v1beta1/tx").MsgPlaceBidAmino) => import("./auction/v1beta1/tx").MsgPlaceBid;
    };
};
export declare const kavaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningKavaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningKavaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
