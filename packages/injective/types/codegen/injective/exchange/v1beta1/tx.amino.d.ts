import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgReclaimLockedFunds, MsgUpdateParams } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgDeposit";
    value: {
        sender: string;
        subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgWithdraw";
    value: {
        sender: string;
        subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgInstantSpotMarketLaunchAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        base_denom: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface MsgInstantPerpetualMarketLaunchAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_scale_factor: number;
        oracle_type: number;
        maker_fee_rate: string;
        taker_fee_rate: string;
        initial_margin_ratio: string;
        maintenance_margin_ratio: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface MsgInstantExpiryFuturesMarketLaunchAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_type: number;
        oracle_scale_factor: number;
        expiry: string;
        maker_fee_rate: string;
        taker_fee_rate: string;
        initial_margin_ratio: string;
        maintenance_margin_ratio: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface MsgCreateSpotLimitOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        };
    };
}
export interface MsgBatchCreateSpotLimitOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders";
    value: {
        sender: string;
        orders: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        }[];
    };
}
export interface MsgCreateSpotMarketOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        };
    };
}
export interface MsgCancelSpotOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelSpotOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
    };
}
export interface MsgBatchCancelSpotOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface MsgBatchUpdateOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchUpdateOrders";
    value: {
        sender: string;
        subaccount_id: string;
        spot_market_ids_to_cancel_all: string[];
        derivative_market_ids_to_cancel_all: string[];
        spot_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        derivative_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        spot_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        }[];
        derivative_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
        binary_options_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        binary_options_market_ids_to_cancel_all: string[];
        binary_options_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
    };
}
export interface MsgPrivilegedExecuteContractAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract";
    value: {
        sender: string;
        funds: string;
        contract_address: string;
        data: string;
    };
}
export interface MsgCreateDerivativeLimitOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface MsgBatchCreateDerivativeLimitOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders";
    value: {
        sender: string;
        orders: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
    };
}
export interface MsgCreateDerivativeMarketOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface MsgCancelDerivativeOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
        order_mask: number;
    };
}
export interface MsgBatchCancelDerivativeOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface MsgInstantBinaryOptionsMarketLaunchAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        oracle_symbol: string;
        oracle_provider: string;
        oracle_type: number;
        oracle_scale_factor: number;
        maker_fee_rate: string;
        taker_fee_rate: string;
        expiration_timestamp: string;
        settlement_timestamp: string;
        admin: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface MsgCreateBinaryOptionsLimitOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface MsgCreateBinaryOptionsMarketOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface MsgCancelBinaryOptionsOrderAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
        order_mask: number;
    };
}
export interface MsgBatchCancelBinaryOptionsOrdersAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface MsgSubaccountTransferAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgSubaccountTransfer";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgExternalTransferAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgExternalTransfer";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgLiquidatePositionAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgLiquidatePosition";
    value: {
        sender: string;
        subaccount_id: string;
        market_id: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface MsgIncreasePositionMarginAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgIncreasePositionMargin";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        market_id: string;
        amount: string;
    };
}
export interface MsgRewardsOptOutAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgRewardsOptOut";
    value: {
        sender: string;
    };
}
export interface MsgAdminUpdateBinaryOptionsMarketAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket";
    value: {
        sender: string;
        market_id: string;
        settlement_price: string;
        expiration_timestamp: string;
        settlement_timestamp: string;
        status: number;
    };
}
export interface MsgReclaimLockedFundsAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgReclaimLockedFunds";
    value: {
        sender: string;
        lockedAccountPubKey: Uint8Array;
        signature: Uint8Array;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            community_tax: string;
            base_proposer_reward: string;
            bonus_proposer_reward: string;
            withdraw_addr_enabled: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ sender, subaccount_id, amount }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ sender, subaccount_id, amount }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, baseDenom, quoteDenom, minPriceTickSize, minQuantityTickSize }: MsgInstantSpotMarketLaunch) => MsgInstantSpotMarketLaunchAminoType["value"];
        fromAmino: ({ sender, ticker, base_denom, quote_denom, min_price_tick_size, min_quantity_tick_size }: MsgInstantSpotMarketLaunchAminoType["value"]) => MsgInstantSpotMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleScaleFactor, oracleType, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: MsgInstantPerpetualMarketLaunch) => MsgInstantPerpetualMarketLaunchAminoType["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_scale_factor, oracle_type, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: MsgInstantPerpetualMarketLaunchAminoType["value"]) => MsgInstantPerpetualMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, oracleScaleFactor, expiry, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: MsgInstantExpiryFuturesMarketLaunch) => MsgInstantExpiryFuturesMarketLaunchAminoType["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, oracle_scale_factor, expiry, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: MsgInstantExpiryFuturesMarketLaunchAminoType["value"]) => MsgInstantExpiryFuturesMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateSpotLimitOrder) => MsgCreateSpotLimitOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateSpotLimitOrderAminoType["value"]) => MsgCreateSpotLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: MsgBatchCreateSpotLimitOrders) => MsgBatchCreateSpotLimitOrdersAminoType["value"];
        fromAmino: ({ sender, orders }: MsgBatchCreateSpotLimitOrdersAminoType["value"]) => MsgBatchCreateSpotLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateSpotMarketOrder) => MsgCreateSpotMarketOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateSpotMarketOrderAminoType["value"]) => MsgCreateSpotMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash }: MsgCancelSpotOrder) => MsgCancelSpotOrderAminoType["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash }: MsgCancelSpotOrderAminoType["value"]) => MsgCancelSpotOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelSpotOrders) => MsgBatchCancelSpotOrdersAminoType["value"];
        fromAmino: ({ sender, data }: MsgBatchCancelSpotOrdersAminoType["value"]) => MsgBatchCancelSpotOrders;
    };
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, spotMarketIdsToCancelAll, derivativeMarketIdsToCancelAll, spotOrdersToCancel, derivativeOrdersToCancel, spotOrdersToCreate, derivativeOrdersToCreate, binaryOptionsOrdersToCancel, binaryOptionsMarketIdsToCancelAll, binaryOptionsOrdersToCreate }: MsgBatchUpdateOrders) => MsgBatchUpdateOrdersAminoType["value"];
        fromAmino: ({ sender, subaccount_id, spot_market_ids_to_cancel_all, derivative_market_ids_to_cancel_all, spot_orders_to_cancel, derivative_orders_to_cancel, spot_orders_to_create, derivative_orders_to_create, binary_options_orders_to_cancel, binary_options_market_ids_to_cancel_all, binary_options_orders_to_create }: MsgBatchUpdateOrdersAminoType["value"]) => MsgBatchUpdateOrders;
    };
    "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, funds, contractAddress, data }: MsgPrivilegedExecuteContract) => MsgPrivilegedExecuteContractAminoType["value"];
        fromAmino: ({ sender, funds, contract_address, data }: MsgPrivilegedExecuteContractAminoType["value"]) => MsgPrivilegedExecuteContract;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateDerivativeLimitOrder) => MsgCreateDerivativeLimitOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateDerivativeLimitOrderAminoType["value"]) => MsgCreateDerivativeLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: MsgBatchCreateDerivativeLimitOrders) => MsgBatchCreateDerivativeLimitOrdersAminoType["value"];
        fromAmino: ({ sender, orders }: MsgBatchCreateDerivativeLimitOrdersAminoType["value"]) => MsgBatchCreateDerivativeLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateDerivativeMarketOrder) => MsgCreateDerivativeMarketOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateDerivativeMarketOrderAminoType["value"]) => MsgCreateDerivativeMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: MsgCancelDerivativeOrder) => MsgCancelDerivativeOrderAminoType["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: MsgCancelDerivativeOrderAminoType["value"]) => MsgCancelDerivativeOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelDerivativeOrders) => MsgBatchCancelDerivativeOrdersAminoType["value"];
        fromAmino: ({ sender, data }: MsgBatchCancelDerivativeOrdersAminoType["value"]) => MsgBatchCancelDerivativeOrders;
    };
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, oracleSymbol, oracleProvider, oracleType, oracleScaleFactor, makerFeeRate, takerFeeRate, expirationTimestamp, settlementTimestamp, admin, quoteDenom, minPriceTickSize, minQuantityTickSize }: MsgInstantBinaryOptionsMarketLaunch) => MsgInstantBinaryOptionsMarketLaunchAminoType["value"];
        fromAmino: ({ sender, ticker, oracle_symbol, oracle_provider, oracle_type, oracle_scale_factor, maker_fee_rate, taker_fee_rate, expiration_timestamp, settlement_timestamp, admin, quote_denom, min_price_tick_size, min_quantity_tick_size }: MsgInstantBinaryOptionsMarketLaunchAminoType["value"]) => MsgInstantBinaryOptionsMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateBinaryOptionsLimitOrder) => MsgCreateBinaryOptionsLimitOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateBinaryOptionsLimitOrderAminoType["value"]) => MsgCreateBinaryOptionsLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateBinaryOptionsMarketOrder) => MsgCreateBinaryOptionsMarketOrderAminoType["value"];
        fromAmino: ({ sender, order }: MsgCreateBinaryOptionsMarketOrderAminoType["value"]) => MsgCreateBinaryOptionsMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: MsgCancelBinaryOptionsOrder) => MsgCancelBinaryOptionsOrderAminoType["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: MsgCancelBinaryOptionsOrderAminoType["value"]) => MsgCancelBinaryOptionsOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelBinaryOptionsOrders) => MsgBatchCancelBinaryOptionsOrdersAminoType["value"];
        fromAmino: ({ sender, data }: MsgBatchCancelBinaryOptionsOrdersAminoType["value"]) => MsgBatchCancelBinaryOptionsOrders;
    };
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: MsgSubaccountTransfer) => MsgSubaccountTransferAminoType["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: MsgSubaccountTransferAminoType["value"]) => MsgSubaccountTransfer;
    };
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: MsgExternalTransfer) => MsgExternalTransferAminoType["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: MsgExternalTransferAminoType["value"]) => MsgExternalTransfer;
    };
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, marketId, order }: MsgLiquidatePosition) => MsgLiquidatePositionAminoType["value"];
        fromAmino: ({ sender, subaccount_id, market_id, order }: MsgLiquidatePositionAminoType["value"]) => MsgLiquidatePosition;
    };
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, marketId, amount }: MsgIncreasePositionMargin) => MsgIncreasePositionMarginAminoType["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, market_id, amount }: MsgIncreasePositionMarginAminoType["value"]) => MsgIncreasePositionMargin;
    };
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: string;
        toAmino: ({ sender }: MsgRewardsOptOut) => MsgRewardsOptOutAminoType["value"];
        fromAmino: ({ sender }: MsgRewardsOptOutAminoType["value"]) => MsgRewardsOptOut;
    };
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: string;
        toAmino: ({ sender, marketId, settlementPrice, expirationTimestamp, settlementTimestamp, status }: MsgAdminUpdateBinaryOptionsMarket) => MsgAdminUpdateBinaryOptionsMarketAminoType["value"];
        fromAmino: ({ sender, market_id, settlement_price, expiration_timestamp, settlement_timestamp, status }: MsgAdminUpdateBinaryOptionsMarketAminoType["value"]) => MsgAdminUpdateBinaryOptionsMarket;
    };
    "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
        aminoType: string;
        toAmino: ({ sender, lockedAccountPubKey, signature }: MsgReclaimLockedFunds) => MsgReclaimLockedFundsAminoType["value"];
        fromAmino: ({ sender, lockedAccountPubKey, signature }: MsgReclaimLockedFundsAminoType["value"]) => MsgReclaimLockedFunds;
    };
    "/injective.exchange.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
