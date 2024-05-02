import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateOperator {
    address: string;
    collateral: Coin[];
    proposer: string;
    name: string;
}
export interface MsgCreateOperatorProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator";
    value: Uint8Array;
}
export interface MsgCreateOperatorAmino {
    address?: string;
    collateral?: CoinAmino[];
    proposer?: string;
    name?: string;
}
export interface MsgCreateOperatorAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateOperator";
    value: MsgCreateOperatorAmino;
}
export interface MsgCreateOperatorSDKType {
    address: string;
    collateral: CoinSDKType[];
    proposer: string;
    name: string;
}
export interface MsgCreateOperatorResponse {
}
export interface MsgCreateOperatorResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse";
    value: Uint8Array;
}
export interface MsgCreateOperatorResponseAmino {
}
export interface MsgCreateOperatorResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse";
    value: MsgCreateOperatorResponseAmino;
}
export interface MsgCreateOperatorResponseSDKType {
}
export interface MsgRemoveOperator {
    address: string;
    proposer: string;
}
export interface MsgRemoveOperatorProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator";
    value: Uint8Array;
}
export interface MsgRemoveOperatorAmino {
    address?: string;
    proposer?: string;
}
export interface MsgRemoveOperatorAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgRemoveOperator";
    value: MsgRemoveOperatorAmino;
}
export interface MsgRemoveOperatorSDKType {
    address: string;
    proposer: string;
}
export interface MsgRemoveOperatorResponse {
}
export interface MsgRemoveOperatorResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse";
    value: Uint8Array;
}
export interface MsgRemoveOperatorResponseAmino {
}
export interface MsgRemoveOperatorResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse";
    value: MsgRemoveOperatorResponseAmino;
}
export interface MsgRemoveOperatorResponseSDKType {
}
export interface MsgAddCollateral {
    address: string;
    collateralIncrement: Coin[];
}
export interface MsgAddCollateralProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral";
    value: Uint8Array;
}
export interface MsgAddCollateralAmino {
    address?: string;
    collateral_increment?: CoinAmino[];
}
export interface MsgAddCollateralAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgAddCollateral";
    value: MsgAddCollateralAmino;
}
export interface MsgAddCollateralSDKType {
    address: string;
    collateral_increment: CoinSDKType[];
}
export interface MsgAddCollateralResponse {
}
export interface MsgAddCollateralResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse";
    value: Uint8Array;
}
export interface MsgAddCollateralResponseAmino {
}
export interface MsgAddCollateralResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse";
    value: MsgAddCollateralResponseAmino;
}
export interface MsgAddCollateralResponseSDKType {
}
export interface MsgReduceCollateral {
    address: string;
    collateralDecrement: Coin[];
}
export interface MsgReduceCollateralProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral";
    value: Uint8Array;
}
export interface MsgReduceCollateralAmino {
    address?: string;
    collateral_decrement?: CoinAmino[];
}
export interface MsgReduceCollateralAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgReduceCollateral";
    value: MsgReduceCollateralAmino;
}
export interface MsgReduceCollateralSDKType {
    address: string;
    collateral_decrement: CoinSDKType[];
}
export interface MsgReduceCollateralResponse {
}
export interface MsgReduceCollateralResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse";
    value: Uint8Array;
}
export interface MsgReduceCollateralResponseAmino {
}
export interface MsgReduceCollateralResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse";
    value: MsgReduceCollateralResponseAmino;
}
export interface MsgReduceCollateralResponseSDKType {
}
export interface MsgWithdrawReward {
    address: string;
}
export interface MsgWithdrawRewardProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward";
    value: Uint8Array;
}
export interface MsgWithdrawRewardAmino {
    address?: string;
}
export interface MsgWithdrawRewardAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgWithdrawReward";
    value: MsgWithdrawRewardAmino;
}
export interface MsgWithdrawRewardSDKType {
    address: string;
}
export interface MsgWithdrawRewardResponse {
}
export interface MsgWithdrawRewardResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse";
    value: Uint8Array;
}
export interface MsgWithdrawRewardResponseAmino {
}
export interface MsgWithdrawRewardResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse";
    value: MsgWithdrawRewardResponseAmino;
}
export interface MsgWithdrawRewardResponseSDKType {
}
export interface MsgCreateTask {
    contract: string;
    function: string;
    bounty: Coin[];
    description: string;
    creator: string;
    wait: bigint;
    validDuration: Duration;
}
export interface MsgCreateTaskProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask";
    value: Uint8Array;
}
export interface MsgCreateTaskAmino {
    contract?: string;
    function?: string;
    bounty?: CoinAmino[];
    description?: string;
    creator?: string;
    wait?: string;
    valid_duration?: DurationAmino;
}
export interface MsgCreateTaskAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateTask";
    value: MsgCreateTaskAmino;
}
export interface MsgCreateTaskSDKType {
    contract: string;
    function: string;
    bounty: CoinSDKType[];
    description: string;
    creator: string;
    wait: bigint;
    valid_duration: DurationSDKType;
}
export interface MsgCreateTaskResponse {
}
export interface MsgCreateTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse";
    value: Uint8Array;
}
export interface MsgCreateTaskResponseAmino {
}
export interface MsgCreateTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse";
    value: MsgCreateTaskResponseAmino;
}
export interface MsgCreateTaskResponseSDKType {
}
export interface MsgTaskResponse {
    contract: string;
    function: string;
    score: bigint;
    operator: string;
}
export interface MsgTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse";
    value: Uint8Array;
}
export interface MsgTaskResponseAmino {
    contract?: string;
    function?: string;
    score?: string;
    operator?: string;
}
export interface MsgTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgTaskResponse";
    value: MsgTaskResponseAmino;
}
export interface MsgTaskResponseSDKType {
    contract: string;
    function: string;
    score: bigint;
    operator: string;
}
export interface MsgTaskResponseResponse {
}
export interface MsgTaskResponseResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse";
    value: Uint8Array;
}
export interface MsgTaskResponseResponseAmino {
}
export interface MsgTaskResponseResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse";
    value: MsgTaskResponseResponseAmino;
}
export interface MsgTaskResponseResponseSDKType {
}
export interface MsgDeleteTask {
    contract: string;
    function: string;
    force: boolean;
    from: string;
}
export interface MsgDeleteTaskProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask";
    value: Uint8Array;
}
export interface MsgDeleteTaskAmino {
    contract?: string;
    function?: string;
    force?: boolean;
    from?: string;
}
export interface MsgDeleteTaskAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgDeleteTask";
    value: MsgDeleteTaskAmino;
}
export interface MsgDeleteTaskSDKType {
    contract: string;
    function: string;
    force: boolean;
    from: string;
}
export interface MsgDeleteTaskResponse {
}
export interface MsgDeleteTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse";
    value: Uint8Array;
}
export interface MsgDeleteTaskResponseAmino {
}
export interface MsgDeleteTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse";
    value: MsgDeleteTaskResponseAmino;
}
export interface MsgDeleteTaskResponseSDKType {
}
export interface MsgCreateTxTask {
    creator: string;
    chainId: string;
    /** the bytes of application chain transaction that is going to be evaluated */
    atxBytes: Uint8Array;
    bounty: Coin[];
    validTime: Timestamp;
}
export interface MsgCreateTxTaskProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask";
    value: Uint8Array;
}
export interface MsgCreateTxTaskAmino {
    creator?: string;
    chain_id?: string;
    /** the bytes of application chain transaction that is going to be evaluated */
    atx_bytes?: string;
    bounty?: CoinAmino[];
    valid_time?: string;
}
export interface MsgCreateTxTaskAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateTxTask";
    value: MsgCreateTxTaskAmino;
}
export interface MsgCreateTxTaskSDKType {
    creator: string;
    chain_id: string;
    atx_bytes: Uint8Array;
    bounty: CoinSDKType[];
    valid_time: TimestampSDKType;
}
export interface MsgCreateTxTaskResponse {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
}
export interface MsgCreateTxTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse";
    value: Uint8Array;
}
export interface MsgCreateTxTaskResponseAmino {
    /** sha256 hash of the application chain transaction */
    atx_hash?: string;
}
export interface MsgCreateTxTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse";
    value: MsgCreateTxTaskResponseAmino;
}
export interface MsgCreateTxTaskResponseSDKType {
    atx_hash: Uint8Array;
}
export interface MsgTxTaskResponse {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
    score: bigint;
    operator: string;
}
export interface MsgTxTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse";
    value: Uint8Array;
}
export interface MsgTxTaskResponseAmino {
    /** sha256 hash of the application chain transaction */
    atx_hash?: string;
    score?: string;
    operator?: string;
}
export interface MsgTxTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgTxTaskResponse";
    value: MsgTxTaskResponseAmino;
}
export interface MsgTxTaskResponseSDKType {
    atx_hash: Uint8Array;
    score: bigint;
    operator: string;
}
export interface MsgTxTaskResponseResponse {
}
export interface MsgTxTaskResponseResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse";
    value: Uint8Array;
}
export interface MsgTxTaskResponseResponseAmino {
}
export interface MsgTxTaskResponseResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse";
    value: MsgTxTaskResponseResponseAmino;
}
export interface MsgTxTaskResponseResponseSDKType {
}
export interface MsgDeleteTxTask {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
    from: string;
}
export interface MsgDeleteTxTaskProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask";
    value: Uint8Array;
}
export interface MsgDeleteTxTaskAmino {
    /** sha256 hash of the application chain transaction */
    atx_hash?: string;
    from?: string;
}
export interface MsgDeleteTxTaskAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgDeleteTxTask";
    value: MsgDeleteTxTaskAmino;
}
export interface MsgDeleteTxTaskSDKType {
    atx_hash: Uint8Array;
    from: string;
}
export interface MsgDeleteTxTaskResponse {
}
export interface MsgDeleteTxTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse";
    value: Uint8Array;
}
export interface MsgDeleteTxTaskResponseAmino {
}
export interface MsgDeleteTxTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse";
    value: MsgDeleteTxTaskResponseAmino;
}
export interface MsgDeleteTxTaskResponseSDKType {
}
export declare const MsgCreateOperator: {
    typeUrl: string;
    encode(message: MsgCreateOperator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateOperator;
    fromPartial(object: Partial<MsgCreateOperator>): MsgCreateOperator;
    fromAmino(object: MsgCreateOperatorAmino): MsgCreateOperator;
    toAmino(message: MsgCreateOperator): MsgCreateOperatorAmino;
    fromAminoMsg(object: MsgCreateOperatorAminoMsg): MsgCreateOperator;
    fromProtoMsg(message: MsgCreateOperatorProtoMsg): MsgCreateOperator;
    toProto(message: MsgCreateOperator): Uint8Array;
    toProtoMsg(message: MsgCreateOperator): MsgCreateOperatorProtoMsg;
};
export declare const MsgCreateOperatorResponse: {
    typeUrl: string;
    encode(_: MsgCreateOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateOperatorResponse;
    fromPartial(_: Partial<MsgCreateOperatorResponse>): MsgCreateOperatorResponse;
    fromAmino(_: MsgCreateOperatorResponseAmino): MsgCreateOperatorResponse;
    toAmino(_: MsgCreateOperatorResponse): MsgCreateOperatorResponseAmino;
    fromAminoMsg(object: MsgCreateOperatorResponseAminoMsg): MsgCreateOperatorResponse;
    fromProtoMsg(message: MsgCreateOperatorResponseProtoMsg): MsgCreateOperatorResponse;
    toProto(message: MsgCreateOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgCreateOperatorResponse): MsgCreateOperatorResponseProtoMsg;
};
export declare const MsgRemoveOperator: {
    typeUrl: string;
    encode(message: MsgRemoveOperator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveOperator;
    fromPartial(object: Partial<MsgRemoveOperator>): MsgRemoveOperator;
    fromAmino(object: MsgRemoveOperatorAmino): MsgRemoveOperator;
    toAmino(message: MsgRemoveOperator): MsgRemoveOperatorAmino;
    fromAminoMsg(object: MsgRemoveOperatorAminoMsg): MsgRemoveOperator;
    fromProtoMsg(message: MsgRemoveOperatorProtoMsg): MsgRemoveOperator;
    toProto(message: MsgRemoveOperator): Uint8Array;
    toProtoMsg(message: MsgRemoveOperator): MsgRemoveOperatorProtoMsg;
};
export declare const MsgRemoveOperatorResponse: {
    typeUrl: string;
    encode(_: MsgRemoveOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveOperatorResponse;
    fromPartial(_: Partial<MsgRemoveOperatorResponse>): MsgRemoveOperatorResponse;
    fromAmino(_: MsgRemoveOperatorResponseAmino): MsgRemoveOperatorResponse;
    toAmino(_: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseAmino;
    fromAminoMsg(object: MsgRemoveOperatorResponseAminoMsg): MsgRemoveOperatorResponse;
    fromProtoMsg(message: MsgRemoveOperatorResponseProtoMsg): MsgRemoveOperatorResponse;
    toProto(message: MsgRemoveOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseProtoMsg;
};
export declare const MsgAddCollateral: {
    typeUrl: string;
    encode(message: MsgAddCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddCollateral;
    fromPartial(object: Partial<MsgAddCollateral>): MsgAddCollateral;
    fromAmino(object: MsgAddCollateralAmino): MsgAddCollateral;
    toAmino(message: MsgAddCollateral): MsgAddCollateralAmino;
    fromAminoMsg(object: MsgAddCollateralAminoMsg): MsgAddCollateral;
    fromProtoMsg(message: MsgAddCollateralProtoMsg): MsgAddCollateral;
    toProto(message: MsgAddCollateral): Uint8Array;
    toProtoMsg(message: MsgAddCollateral): MsgAddCollateralProtoMsg;
};
export declare const MsgAddCollateralResponse: {
    typeUrl: string;
    encode(_: MsgAddCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddCollateralResponse;
    fromPartial(_: Partial<MsgAddCollateralResponse>): MsgAddCollateralResponse;
    fromAmino(_: MsgAddCollateralResponseAmino): MsgAddCollateralResponse;
    toAmino(_: MsgAddCollateralResponse): MsgAddCollateralResponseAmino;
    fromAminoMsg(object: MsgAddCollateralResponseAminoMsg): MsgAddCollateralResponse;
    fromProtoMsg(message: MsgAddCollateralResponseProtoMsg): MsgAddCollateralResponse;
    toProto(message: MsgAddCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgAddCollateralResponse): MsgAddCollateralResponseProtoMsg;
};
export declare const MsgReduceCollateral: {
    typeUrl: string;
    encode(message: MsgReduceCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReduceCollateral;
    fromPartial(object: Partial<MsgReduceCollateral>): MsgReduceCollateral;
    fromAmino(object: MsgReduceCollateralAmino): MsgReduceCollateral;
    toAmino(message: MsgReduceCollateral): MsgReduceCollateralAmino;
    fromAminoMsg(object: MsgReduceCollateralAminoMsg): MsgReduceCollateral;
    fromProtoMsg(message: MsgReduceCollateralProtoMsg): MsgReduceCollateral;
    toProto(message: MsgReduceCollateral): Uint8Array;
    toProtoMsg(message: MsgReduceCollateral): MsgReduceCollateralProtoMsg;
};
export declare const MsgReduceCollateralResponse: {
    typeUrl: string;
    encode(_: MsgReduceCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgReduceCollateralResponse;
    fromPartial(_: Partial<MsgReduceCollateralResponse>): MsgReduceCollateralResponse;
    fromAmino(_: MsgReduceCollateralResponseAmino): MsgReduceCollateralResponse;
    toAmino(_: MsgReduceCollateralResponse): MsgReduceCollateralResponseAmino;
    fromAminoMsg(object: MsgReduceCollateralResponseAminoMsg): MsgReduceCollateralResponse;
    fromProtoMsg(message: MsgReduceCollateralResponseProtoMsg): MsgReduceCollateralResponse;
    toProto(message: MsgReduceCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgReduceCollateralResponse): MsgReduceCollateralResponseProtoMsg;
};
export declare const MsgWithdrawReward: {
    typeUrl: string;
    encode(message: MsgWithdrawReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawReward;
    fromPartial(object: Partial<MsgWithdrawReward>): MsgWithdrawReward;
    fromAmino(object: MsgWithdrawRewardAmino): MsgWithdrawReward;
    toAmino(message: MsgWithdrawReward): MsgWithdrawRewardAmino;
    fromAminoMsg(object: MsgWithdrawRewardAminoMsg): MsgWithdrawReward;
    fromProtoMsg(message: MsgWithdrawRewardProtoMsg): MsgWithdrawReward;
    toProto(message: MsgWithdrawReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawReward): MsgWithdrawRewardProtoMsg;
};
export declare const MsgWithdrawRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawRewardResponse;
    fromPartial(_: Partial<MsgWithdrawRewardResponse>): MsgWithdrawRewardResponse;
    fromAmino(_: MsgWithdrawRewardResponseAmino): MsgWithdrawRewardResponse;
    toAmino(_: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawRewardResponseAminoMsg): MsgWithdrawRewardResponse;
    fromProtoMsg(message: MsgWithdrawRewardResponseProtoMsg): MsgWithdrawRewardResponse;
    toProto(message: MsgWithdrawRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseProtoMsg;
};
export declare const MsgCreateTask: {
    typeUrl: string;
    encode(message: MsgCreateTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTask;
    fromPartial(object: Partial<MsgCreateTask>): MsgCreateTask;
    fromAmino(object: MsgCreateTaskAmino): MsgCreateTask;
    toAmino(message: MsgCreateTask): MsgCreateTaskAmino;
    fromAminoMsg(object: MsgCreateTaskAminoMsg): MsgCreateTask;
    fromProtoMsg(message: MsgCreateTaskProtoMsg): MsgCreateTask;
    toProto(message: MsgCreateTask): Uint8Array;
    toProtoMsg(message: MsgCreateTask): MsgCreateTaskProtoMsg;
};
export declare const MsgCreateTaskResponse: {
    typeUrl: string;
    encode(_: MsgCreateTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateTaskResponse;
    fromPartial(_: Partial<MsgCreateTaskResponse>): MsgCreateTaskResponse;
    fromAmino(_: MsgCreateTaskResponseAmino): MsgCreateTaskResponse;
    toAmino(_: MsgCreateTaskResponse): MsgCreateTaskResponseAmino;
    fromAminoMsg(object: MsgCreateTaskResponseAminoMsg): MsgCreateTaskResponse;
    fromProtoMsg(message: MsgCreateTaskResponseProtoMsg): MsgCreateTaskResponse;
    toProto(message: MsgCreateTaskResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTaskResponse): MsgCreateTaskResponseProtoMsg;
};
export declare const MsgTaskResponse: {
    typeUrl: string;
    encode(message: MsgTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTaskResponse;
    fromPartial(object: Partial<MsgTaskResponse>): MsgTaskResponse;
    fromAmino(object: MsgTaskResponseAmino): MsgTaskResponse;
    toAmino(message: MsgTaskResponse): MsgTaskResponseAmino;
    fromAminoMsg(object: MsgTaskResponseAminoMsg): MsgTaskResponse;
    fromProtoMsg(message: MsgTaskResponseProtoMsg): MsgTaskResponse;
    toProto(message: MsgTaskResponse): Uint8Array;
    toProtoMsg(message: MsgTaskResponse): MsgTaskResponseProtoMsg;
};
export declare const MsgTaskResponseResponse: {
    typeUrl: string;
    encode(_: MsgTaskResponseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTaskResponseResponse;
    fromPartial(_: Partial<MsgTaskResponseResponse>): MsgTaskResponseResponse;
    fromAmino(_: MsgTaskResponseResponseAmino): MsgTaskResponseResponse;
    toAmino(_: MsgTaskResponseResponse): MsgTaskResponseResponseAmino;
    fromAminoMsg(object: MsgTaskResponseResponseAminoMsg): MsgTaskResponseResponse;
    fromProtoMsg(message: MsgTaskResponseResponseProtoMsg): MsgTaskResponseResponse;
    toProto(message: MsgTaskResponseResponse): Uint8Array;
    toProtoMsg(message: MsgTaskResponseResponse): MsgTaskResponseResponseProtoMsg;
};
export declare const MsgDeleteTask: {
    typeUrl: string;
    encode(message: MsgDeleteTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteTask;
    fromPartial(object: Partial<MsgDeleteTask>): MsgDeleteTask;
    fromAmino(object: MsgDeleteTaskAmino): MsgDeleteTask;
    toAmino(message: MsgDeleteTask): MsgDeleteTaskAmino;
    fromAminoMsg(object: MsgDeleteTaskAminoMsg): MsgDeleteTask;
    fromProtoMsg(message: MsgDeleteTaskProtoMsg): MsgDeleteTask;
    toProto(message: MsgDeleteTask): Uint8Array;
    toProtoMsg(message: MsgDeleteTask): MsgDeleteTaskProtoMsg;
};
export declare const MsgDeleteTaskResponse: {
    typeUrl: string;
    encode(_: MsgDeleteTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteTaskResponse;
    fromPartial(_: Partial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse;
    fromAmino(_: MsgDeleteTaskResponseAmino): MsgDeleteTaskResponse;
    toAmino(_: MsgDeleteTaskResponse): MsgDeleteTaskResponseAmino;
    fromAminoMsg(object: MsgDeleteTaskResponseAminoMsg): MsgDeleteTaskResponse;
    fromProtoMsg(message: MsgDeleteTaskResponseProtoMsg): MsgDeleteTaskResponse;
    toProto(message: MsgDeleteTaskResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTaskResponse): MsgDeleteTaskResponseProtoMsg;
};
export declare const MsgCreateTxTask: {
    typeUrl: string;
    encode(message: MsgCreateTxTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTxTask;
    fromPartial(object: Partial<MsgCreateTxTask>): MsgCreateTxTask;
    fromAmino(object: MsgCreateTxTaskAmino): MsgCreateTxTask;
    toAmino(message: MsgCreateTxTask): MsgCreateTxTaskAmino;
    fromAminoMsg(object: MsgCreateTxTaskAminoMsg): MsgCreateTxTask;
    fromProtoMsg(message: MsgCreateTxTaskProtoMsg): MsgCreateTxTask;
    toProto(message: MsgCreateTxTask): Uint8Array;
    toProtoMsg(message: MsgCreateTxTask): MsgCreateTxTaskProtoMsg;
};
export declare const MsgCreateTxTaskResponse: {
    typeUrl: string;
    encode(message: MsgCreateTxTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTxTaskResponse;
    fromPartial(object: Partial<MsgCreateTxTaskResponse>): MsgCreateTxTaskResponse;
    fromAmino(object: MsgCreateTxTaskResponseAmino): MsgCreateTxTaskResponse;
    toAmino(message: MsgCreateTxTaskResponse): MsgCreateTxTaskResponseAmino;
    fromAminoMsg(object: MsgCreateTxTaskResponseAminoMsg): MsgCreateTxTaskResponse;
    fromProtoMsg(message: MsgCreateTxTaskResponseProtoMsg): MsgCreateTxTaskResponse;
    toProto(message: MsgCreateTxTaskResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTxTaskResponse): MsgCreateTxTaskResponseProtoMsg;
};
export declare const MsgTxTaskResponse: {
    typeUrl: string;
    encode(message: MsgTxTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTxTaskResponse;
    fromPartial(object: Partial<MsgTxTaskResponse>): MsgTxTaskResponse;
    fromAmino(object: MsgTxTaskResponseAmino): MsgTxTaskResponse;
    toAmino(message: MsgTxTaskResponse): MsgTxTaskResponseAmino;
    fromAminoMsg(object: MsgTxTaskResponseAminoMsg): MsgTxTaskResponse;
    fromProtoMsg(message: MsgTxTaskResponseProtoMsg): MsgTxTaskResponse;
    toProto(message: MsgTxTaskResponse): Uint8Array;
    toProtoMsg(message: MsgTxTaskResponse): MsgTxTaskResponseProtoMsg;
};
export declare const MsgTxTaskResponseResponse: {
    typeUrl: string;
    encode(_: MsgTxTaskResponseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTxTaskResponseResponse;
    fromPartial(_: Partial<MsgTxTaskResponseResponse>): MsgTxTaskResponseResponse;
    fromAmino(_: MsgTxTaskResponseResponseAmino): MsgTxTaskResponseResponse;
    toAmino(_: MsgTxTaskResponseResponse): MsgTxTaskResponseResponseAmino;
    fromAminoMsg(object: MsgTxTaskResponseResponseAminoMsg): MsgTxTaskResponseResponse;
    fromProtoMsg(message: MsgTxTaskResponseResponseProtoMsg): MsgTxTaskResponseResponse;
    toProto(message: MsgTxTaskResponseResponse): Uint8Array;
    toProtoMsg(message: MsgTxTaskResponseResponse): MsgTxTaskResponseResponseProtoMsg;
};
export declare const MsgDeleteTxTask: {
    typeUrl: string;
    encode(message: MsgDeleteTxTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteTxTask;
    fromPartial(object: Partial<MsgDeleteTxTask>): MsgDeleteTxTask;
    fromAmino(object: MsgDeleteTxTaskAmino): MsgDeleteTxTask;
    toAmino(message: MsgDeleteTxTask): MsgDeleteTxTaskAmino;
    fromAminoMsg(object: MsgDeleteTxTaskAminoMsg): MsgDeleteTxTask;
    fromProtoMsg(message: MsgDeleteTxTaskProtoMsg): MsgDeleteTxTask;
    toProto(message: MsgDeleteTxTask): Uint8Array;
    toProtoMsg(message: MsgDeleteTxTask): MsgDeleteTxTaskProtoMsg;
};
export declare const MsgDeleteTxTaskResponse: {
    typeUrl: string;
    encode(_: MsgDeleteTxTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteTxTaskResponse;
    fromPartial(_: Partial<MsgDeleteTxTaskResponse>): MsgDeleteTxTaskResponse;
    fromAmino(_: MsgDeleteTxTaskResponseAmino): MsgDeleteTxTaskResponse;
    toAmino(_: MsgDeleteTxTaskResponse): MsgDeleteTxTaskResponseAmino;
    fromAminoMsg(object: MsgDeleteTxTaskResponseAminoMsg): MsgDeleteTxTaskResponse;
    fromProtoMsg(message: MsgDeleteTxTaskResponseProtoMsg): MsgDeleteTxTaskResponse;
    toProto(message: MsgDeleteTxTaskResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTxTaskResponse): MsgDeleteTxTaskResponseProtoMsg;
};
