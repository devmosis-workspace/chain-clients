import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** CDP defines the state of a single collateralized debt position. */
export interface CDP {
    id: Long;
    owner: Uint8Array;
    type: string;
    collateral?: Coin;
    principal?: Coin;
    accumulatedFees?: Coin;
    feesUpdated?: Timestamp;
    interestFactor: string;
}
/** CDP defines the state of a single collateralized debt position. */
export interface CDPSDKType {
    id: Long;
    owner: Uint8Array;
    type: string;
    collateral?: CoinSDKType;
    principal?: CoinSDKType;
    accumulated_fees?: CoinSDKType;
    fees_updated?: TimestampSDKType;
    interest_factor: string;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface Deposit {
    cdpId: Long;
    depositor: string;
    amount?: Coin;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface DepositSDKType {
    cdp_id: Long;
    depositor: string;
    amount?: CoinSDKType;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipal {
    collateralType: string;
    amount?: Coin;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipalSDKType {
    collateral_type: string;
    amount?: CoinSDKType;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateral {
    collateralType: string;
    amount?: Coin;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateralSDKType {
    collateral_type: string;
    amount?: CoinSDKType;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndex {
    cdpIds: Long[];
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndexSDKType {
    cdp_ids: Long[];
}
export declare const CDP: {
    encode(message: CDP, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CDP;
    fromPartial(object: Partial<CDP>): CDP;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
};
export declare const TotalPrincipal: {
    encode(message: TotalPrincipal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TotalPrincipal;
    fromPartial(object: Partial<TotalPrincipal>): TotalPrincipal;
};
export declare const TotalCollateral: {
    encode(message: TotalCollateral, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TotalCollateral;
    fromPartial(object: Partial<TotalCollateral>): TotalCollateral;
};
export declare const OwnerCDPIndex: {
    encode(message: OwnerCDPIndex, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OwnerCDPIndex;
    fromPartial(object: Partial<OwnerCDPIndex>): OwnerCDPIndex;
};
