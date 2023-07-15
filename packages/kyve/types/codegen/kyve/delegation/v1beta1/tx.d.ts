import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgDelegate ... */
export interface MsgDelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: Long;
}
/** MsgDelegate ... */
export interface MsgDelegateSDKType {
    creator: string;
    staker: string;
    amount: Long;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseSDKType {
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsSDKType {
    creator: string;
    staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseSDKType {
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: Long;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateSDKType {
    creator: string;
    staker: string;
    amount: Long;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseSDKType {
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    fromStaker: string;
    /** staker ... */
    toStaker: string;
    /** amount ... */
    amount: Long;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateSDKType {
    creator: string;
    from_staker: string;
    to_staker: string;
    amount: Long;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/delegation parameters to update. */
    payload: string;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDelegate;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDelegateResponse;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
};
export declare const MsgWithdrawRewards: {
    encode(message: MsgWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawRewards;
    fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards;
};
export declare const MsgWithdrawRewardsResponse: {
    encode(_: MsgWithdrawRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUndelegate;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(_: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUndelegateResponse;
    fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
};
export declare const MsgRedelegate: {
    encode(message: MsgRedelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRedelegate;
    fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate;
};
export declare const MsgRedelegateResponse: {
    encode(_: MsgRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRedelegateResponse;
    fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
