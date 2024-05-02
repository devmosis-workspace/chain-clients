import { Deposit, DepositAmino, DepositSDKType } from "../../deposit/v1/deposit";
import { GenesisState as GenesisState1 } from "../../node/v2/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../node/v2/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../node/v2/genesis";
import { GenesisPlan, GenesisPlanAmino, GenesisPlanSDKType } from "../../plan/v2/genesis";
import { GenesisState as GenesisState2 } from "../../provider/v2/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../provider/v2/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../provider/v2/genesis";
import { GenesisState as GenesisState3 } from "../../session/v2/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../session/v2/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../session/v2/genesis";
import { GenesisState as GenesisState4 } from "../../subscription/v2/genesis";
import { GenesisStateAmino as GenesisState4Amino } from "../../subscription/v2/genesis";
import { GenesisStateSDKType as GenesisState4SDKType } from "../../subscription/v2/genesis";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    deposits: Deposit[];
    nodes?: GenesisState1;
    plans: GenesisPlan[];
    providers?: GenesisState2;
    sessions?: GenesisState3;
    subscriptions?: GenesisState4;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.vpn.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    deposits?: DepositAmino[];
    nodes?: GenesisState1Amino;
    plans?: GenesisPlanAmino[];
    providers?: GenesisState2Amino;
    sessions?: GenesisState3Amino;
    subscriptions?: GenesisState4Amino;
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.vpn.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    deposits: DepositSDKType[];
    nodes?: GenesisState1SDKType;
    plans: GenesisPlanSDKType[];
    providers?: GenesisState2SDKType;
    sessions?: GenesisState3SDKType;
    subscriptions?: GenesisState4SDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
