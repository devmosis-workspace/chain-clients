import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const injectiveAminoConverters: {
    "/injective.wasmx.v1.MsgUpdateContract": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgUpdateContract) => import("./wasmx/v1/tx").MsgUpdateContractAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgUpdateContractAmino) => import("./wasmx/v1/tx").MsgUpdateContract;
    };
    "/injective.wasmx.v1.MsgActivateContract": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgActivateContract) => import("./wasmx/v1/tx").MsgActivateContractAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgActivateContractAmino) => import("./wasmx/v1/tx").MsgActivateContract;
    };
    "/injective.wasmx.v1.MsgDeactivateContract": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgDeactivateContract) => import("./wasmx/v1/tx").MsgDeactivateContractAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgDeactivateContractAmino) => import("./wasmx/v1/tx").MsgDeactivateContract;
    };
    "/injective.wasmx.v1.MsgExecuteContractCompat": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgExecuteContractCompat) => import("./wasmx/v1/tx").MsgExecuteContractCompatAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgExecuteContractCompatAmino) => import("./wasmx/v1/tx").MsgExecuteContractCompat;
    };
    "/injective.wasmx.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgUpdateParams) => import("./wasmx/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgUpdateParamsAmino) => import("./wasmx/v1/tx").MsgUpdateParams;
    };
    "/injective.wasmx.v1.MsgRegisterContract": {
        aminoType: string;
        toAmino: (message: import("./wasmx/v1/tx").MsgRegisterContract) => import("./wasmx/v1/tx").MsgRegisterContractAmino;
        fromAmino: (object: import("./wasmx/v1/tx").MsgRegisterContractAmino) => import("./wasmx/v1/tx").MsgRegisterContract;
    };
    "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/injective.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgMint) => import("./tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgMintAmino) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/injective.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgBurn) => import("./tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgBurnAmino) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgUpdateParams) => import("./tokenfactory/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgUpdateParamsAmino) => import("./tokenfactory/v1beta1/tx").MsgUpdateParams;
    };
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgValsetConfirm) => import("./peggy/v1/msgs").MsgValsetConfirmAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgValsetConfirmAmino) => import("./peggy/v1/msgs").MsgValsetConfirm;
    };
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgSendToEth) => import("./peggy/v1/msgs").MsgSendToEthAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgSendToEthAmino) => import("./peggy/v1/msgs").MsgSendToEth;
    };
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgRequestBatch) => import("./peggy/v1/msgs").MsgRequestBatchAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgRequestBatchAmino) => import("./peggy/v1/msgs").MsgRequestBatch;
    };
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgConfirmBatch) => import("./peggy/v1/msgs").MsgConfirmBatchAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgConfirmBatchAmino) => import("./peggy/v1/msgs").MsgConfirmBatch;
    };
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgDepositClaim) => import("./peggy/v1/msgs").MsgDepositClaimAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgDepositClaimAmino) => import("./peggy/v1/msgs").MsgDepositClaim;
    };
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgWithdrawClaim) => import("./peggy/v1/msgs").MsgWithdrawClaimAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgWithdrawClaimAmino) => import("./peggy/v1/msgs").MsgWithdrawClaim;
    };
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgValsetUpdatedClaim) => import("./peggy/v1/msgs").MsgValsetUpdatedClaimAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgValsetUpdatedClaimAmino) => import("./peggy/v1/msgs").MsgValsetUpdatedClaim;
    };
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgERC20DeployedClaim) => import("./peggy/v1/msgs").MsgERC20DeployedClaimAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgERC20DeployedClaimAmino) => import("./peggy/v1/msgs").MsgERC20DeployedClaim;
    };
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgSetOrchestratorAddresses) => import("./peggy/v1/msgs").MsgSetOrchestratorAddressesAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgSetOrchestratorAddressesAmino) => import("./peggy/v1/msgs").MsgSetOrchestratorAddresses;
    };
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgCancelSendToEth) => import("./peggy/v1/msgs").MsgCancelSendToEthAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgCancelSendToEthAmino) => import("./peggy/v1/msgs").MsgCancelSendToEth;
    };
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidence) => import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidenceAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidenceAmino) => import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidence;
    };
    "/injective.peggy.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./peggy/v1/msgs").MsgUpdateParams) => import("./peggy/v1/msgs").MsgUpdateParamsAmino;
        fromAmino: (object: import("./peggy/v1/msgs").MsgUpdateParamsAmino) => import("./peggy/v1/msgs").MsgUpdateParams;
    };
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRelayProviderPrices) => import("./oracle/v1beta1/tx").MsgRelayProviderPricesAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRelayProviderPricesAmino) => import("./oracle/v1beta1/tx").MsgRelayProviderPrices;
    };
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRelayPriceFeedPrice) => import("./oracle/v1beta1/tx").MsgRelayPriceFeedPriceAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRelayPriceFeedPriceAmino) => import("./oracle/v1beta1/tx").MsgRelayPriceFeedPrice;
    };
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRelayBandRates) => import("./oracle/v1beta1/tx").MsgRelayBandRatesAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRelayBandRatesAmino) => import("./oracle/v1beta1/tx").MsgRelayBandRates;
    };
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRequestBandIBCRates) => import("./oracle/v1beta1/tx").MsgRequestBandIBCRatesAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRequestBandIBCRatesAmino) => import("./oracle/v1beta1/tx").MsgRequestBandIBCRates;
    };
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessages) => import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessagesAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessagesAmino) => import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessages;
    };
    "/injective.oracle.v1beta1.MsgRelayPythPrices": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgRelayPythPrices) => import("./oracle/v1beta1/tx").MsgRelayPythPricesAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgRelayPythPricesAmino) => import("./oracle/v1beta1/tx").MsgRelayPythPrices;
    };
    "/injective.oracle.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgUpdateParams) => import("./oracle/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgUpdateParamsAmino) => import("./oracle/v1beta1/tx").MsgUpdateParams;
    };
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgCreateFeed) => import("./ocr/v1beta1/tx").MsgCreateFeedAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgCreateFeedAmino) => import("./ocr/v1beta1/tx").MsgCreateFeed;
    };
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgUpdateFeed) => import("./ocr/v1beta1/tx").MsgUpdateFeedAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgUpdateFeedAmino) => import("./ocr/v1beta1/tx").MsgUpdateFeed;
    };
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgTransmit) => import("./ocr/v1beta1/tx").MsgTransmitAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgTransmitAmino) => import("./ocr/v1beta1/tx").MsgTransmit;
    };
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgFundFeedRewardPool) => import("./ocr/v1beta1/tx").MsgFundFeedRewardPoolAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgFundFeedRewardPoolAmino) => import("./ocr/v1beta1/tx").MsgFundFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPool) => import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPoolAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPoolAmino) => import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgSetPayees) => import("./ocr/v1beta1/tx").MsgSetPayeesAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgSetPayeesAmino) => import("./ocr/v1beta1/tx").MsgSetPayees;
    };
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgTransferPayeeship) => import("./ocr/v1beta1/tx").MsgTransferPayeeshipAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgTransferPayeeshipAmino) => import("./ocr/v1beta1/tx").MsgTransferPayeeship;
    };
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgAcceptPayeeship) => import("./ocr/v1beta1/tx").MsgAcceptPayeeshipAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgAcceptPayeeshipAmino) => import("./ocr/v1beta1/tx").MsgAcceptPayeeship;
    };
    "/injective.ocr.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./ocr/v1beta1/tx").MsgUpdateParams) => import("./ocr/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./ocr/v1beta1/tx").MsgUpdateParamsAmino) => import("./ocr/v1beta1/tx").MsgUpdateParams;
    };
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: string;
        toAmino: (message: import("./insurance/v1beta1/tx").MsgCreateInsuranceFund) => import("./insurance/v1beta1/tx").MsgCreateInsuranceFundAmino;
        fromAmino: (object: import("./insurance/v1beta1/tx").MsgCreateInsuranceFundAmino) => import("./insurance/v1beta1/tx").MsgCreateInsuranceFund;
    };
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: string;
        toAmino: (message: import("./insurance/v1beta1/tx").MsgUnderwrite) => import("./insurance/v1beta1/tx").MsgUnderwriteAmino;
        fromAmino: (object: import("./insurance/v1beta1/tx").MsgUnderwriteAmino) => import("./insurance/v1beta1/tx").MsgUnderwrite;
    };
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: (message: import("./insurance/v1beta1/tx").MsgRequestRedemption) => import("./insurance/v1beta1/tx").MsgRequestRedemptionAmino;
        fromAmino: (object: import("./insurance/v1beta1/tx").MsgRequestRedemptionAmino) => import("./insurance/v1beta1/tx").MsgRequestRedemption;
    };
    "/injective.insurance.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./insurance/v1beta1/tx").MsgUpdateParams) => import("./insurance/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./insurance/v1beta1/tx").MsgUpdateParamsAmino) => import("./insurance/v1beta1/tx").MsgUpdateParams;
    };
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgDeposit) => import("./exchange/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgDepositAmino) => import("./exchange/v1beta1/tx").MsgDeposit;
    };
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgWithdraw) => import("./exchange/v1beta1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgWithdrawAmino) => import("./exchange/v1beta1/tx").MsgWithdraw;
    };
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunch) => import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunchAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunchAmino) => import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunch) => import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunchAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunchAmino) => import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunch) => import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunchAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunchAmino) => import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrder) => import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrders) => import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrder) => import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCancelSpotOrder) => import("./exchange/v1beta1/tx").MsgCancelSpotOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCancelSpotOrderAmino) => import("./exchange/v1beta1/tx").MsgCancelSpotOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrders) => import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrders;
    };
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchUpdateOrders) => import("./exchange/v1beta1/tx").MsgBatchUpdateOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchUpdateOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchUpdateOrders;
    };
    "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgPrivilegedExecuteContract) => import("./exchange/v1beta1/tx").MsgPrivilegedExecuteContractAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgPrivilegedExecuteContractAmino) => import("./exchange/v1beta1/tx").MsgPrivilegedExecuteContract;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrder) => import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrders) => import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrder) => import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCancelDerivativeOrder) => import("./exchange/v1beta1/tx").MsgCancelDerivativeOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCancelDerivativeOrderAmino) => import("./exchange/v1beta1/tx").MsgCancelDerivativeOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrders) => import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrders;
    };
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunch) => import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunchAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunchAmino) => import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrder) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrder) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrderAmino) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrder) => import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrderAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrderAmino) => import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrders) => import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrdersAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrdersAmino) => import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrders;
    };
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgSubaccountTransfer) => import("./exchange/v1beta1/tx").MsgSubaccountTransferAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgSubaccountTransferAmino) => import("./exchange/v1beta1/tx").MsgSubaccountTransfer;
    };
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgExternalTransfer) => import("./exchange/v1beta1/tx").MsgExternalTransferAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgExternalTransferAmino) => import("./exchange/v1beta1/tx").MsgExternalTransfer;
    };
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgLiquidatePosition) => import("./exchange/v1beta1/tx").MsgLiquidatePositionAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgLiquidatePositionAmino) => import("./exchange/v1beta1/tx").MsgLiquidatePosition;
    };
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgIncreasePositionMargin) => import("./exchange/v1beta1/tx").MsgIncreasePositionMarginAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgIncreasePositionMarginAmino) => import("./exchange/v1beta1/tx").MsgIncreasePositionMargin;
    };
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgRewardsOptOut) => import("./exchange/v1beta1/tx").MsgRewardsOptOutAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgRewardsOptOutAmino) => import("./exchange/v1beta1/tx").MsgRewardsOptOut;
    };
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarket) => import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarketAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarketAmino) => import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarket;
    };
    "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgReclaimLockedFunds) => import("./exchange/v1beta1/tx").MsgReclaimLockedFundsAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgReclaimLockedFundsAmino) => import("./exchange/v1beta1/tx").MsgReclaimLockedFunds;
    };
    "/injective.exchange.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./exchange/v1beta1/tx").MsgUpdateParams) => import("./exchange/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./exchange/v1beta1/tx").MsgUpdateParamsAmino) => import("./exchange/v1beta1/tx").MsgUpdateParams;
    };
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: (message: import("./auction/v1beta1/tx").MsgBid) => import("./auction/v1beta1/tx").MsgBidAmino;
        fromAmino: (object: import("./auction/v1beta1/tx").MsgBidAmino) => import("./auction/v1beta1/tx").MsgBid;
    };
    "/injective.auction.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./auction/v1beta1/tx").MsgUpdateParams) => import("./auction/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./auction/v1beta1/tx").MsgUpdateParamsAmino) => import("./auction/v1beta1/tx").MsgUpdateParams;
    };
};
export declare const injectiveProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningInjectiveClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningInjectiveClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
