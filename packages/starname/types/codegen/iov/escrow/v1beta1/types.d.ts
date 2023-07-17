import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EscrowState defines the state of an escrow */
export declare enum EscrowState {
    /**
     * ESCROW_STATE_OPEN_UNSPECIFIED - ESCROW_STATE_OPEN_UNSPECIFIED defines an open state. TODO:: review the
     * _UNSPECIFIED sufix
     */
    ESCROW_STATE_OPEN_UNSPECIFIED = 0,
    /** ESCROW_STATE_COMPLETED - ESCROW_STATE_COMPLETED defines a completed state. */
    ESCROW_STATE_COMPLETED = 1,
    /** ESCROW_STATE_REFUNDED - ESCROW_STATE_REFUNDED defines a refunded state. */
    ESCROW_STATE_REFUNDED = 2,
    /** ESCROW_STATE_EXPIRED - ESCROW_STATE_REFUNDED defines an expired state. */
    ESCROW_STATE_EXPIRED = 3,
    UNRECOGNIZED = -1
}
export declare const EscrowStateSDKType: typeof EscrowState;
export declare function escrowStateFromJSON(object: any): EscrowState;
export declare function escrowStateToJSON(object: EscrowState): string;
/** Escrow defines the struct of an escrow */
export interface Escrow {
    id: string;
    seller: string;
    object?: Any;
    /**
     * TODO: refactor this to use sdk.Coin instead of sdk.Coins
     * Although the price contains multiple coins, for now we enforce a specific
     * denomination, so there will be only one coin type in a valid escrow
     */
    price: Coin[];
    state: EscrowState;
    deadline: Long;
    brokerAddress: string;
    brokerCommission: string;
}
/** Escrow defines the struct of an escrow */
export interface EscrowSDKType {
    id: string;
    seller: string;
    object?: AnySDKType;
    price: CoinSDKType[];
    state: EscrowState;
    deadline: Long;
    broker_address: string;
    broker_commission: string;
}
export declare const Escrow: {
    encode(message: Escrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Escrow;
    fromPartial(object: Partial<Escrow>): Escrow;
};
