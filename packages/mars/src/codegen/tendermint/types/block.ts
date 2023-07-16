import { Header, HeaderSDKType, Data, DataSDKType, Commit, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListSDKType } from "./evidence";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Block {
  header?: Header;
  data?: Data;
  evidence?: EvidenceList;
  lastCommit?: Commit;
}
export interface BlockSDKType {
  header?: HeaderSDKType;
  data?: DataSDKType;
  evidence?: EvidenceListSDKType;
  last_commit?: CommitSDKType;
}
function createBaseBlock(): Block {
  return {
    header: undefined,
    data: undefined,
    evidence: undefined,
    lastCommit: undefined
  };
}
export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Block {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
      evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : undefined,
      lastCommit: isSet(object.lastCommit) ? Commit.fromJSON(object.lastCommit) : undefined
    };
  },
  fromPartial(object: Partial<Block>): Block {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
    return message;
  }
};