import { Program, ProgramAmino, ProgramSDKType, Finding, FindingAmino, FindingSDKType } from "./bounty";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
  programs: Program[];
  findings: Finding[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/shentu.bounty.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  programs?: ProgramAmino[];
  findings?: FindingAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/shentu.bounty.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  programs: ProgramSDKType[];
  findings: FindingSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    programs: [],
    findings: []
  };
}
export const GenesisState = {
  typeUrl: "/shentu.bounty.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.programs) {
      Program.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.findings) {
      Finding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => Program.fromJSON(e)) : [],
      findings: Array.isArray(object?.findings) ? object.findings.map((e: any) => Finding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.programs = object.programs?.map(e => Program.fromPartial(e)) || [];
    message.findings = object.findings?.map(e => Finding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.programs = object.programs?.map(e => Program.fromAmino(e)) || [];
    message.findings = object.findings?.map(e => Finding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? Program.toAmino(e) : undefined);
    } else {
      obj.programs = message.programs;
    }
    if (message.findings) {
      obj.findings = message.findings.map(e => e ? Finding.toAmino(e) : undefined);
    } else {
      obj.findings = message.findings;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};