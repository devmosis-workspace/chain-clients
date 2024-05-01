import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Branch {
  id: bigint;
  repositoryId: bigint;
  name: string;
  sha: string;
  allowForcePush: boolean;
  createdAt: bigint;
  updatedAt: bigint;
}
export interface BranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Branch";
  value: Uint8Array;
}
export interface BranchAmino {
  id?: string;
  repositoryId?: string;
  name?: string;
  sha?: string;
  allowForcePush?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
export interface BranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.Branch";
  value: BranchAmino;
}
export interface BranchSDKType {
  id: bigint;
  repositoryId: bigint;
  name: string;
  sha: string;
  allowForcePush: boolean;
  createdAt: bigint;
  updatedAt: bigint;
}
function createBaseBranch(): Branch {
  return {
    id: BigInt(0),
    repositoryId: BigInt(0),
    name: "",
    sha: "",
    allowForcePush: false,
    createdAt: BigInt(0),
    updatedAt: BigInt(0)
  };
}
export const Branch = {
  typeUrl: "/gitopia.gitopia.gitopia.Branch",
  encode(message: Branch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(34).string(message.sha);
    }
    if (message.allowForcePush === true) {
      writer.uint32(40).bool(message.allowForcePush);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.updatedAt);
    }
    return writer;
  },
  fromJSON(object: any): Branch {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : "",
      allowForcePush: isSet(object.allowForcePush) ? Boolean(object.allowForcePush) : false,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Branch>): Branch {
    const message = createBaseBranch();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    message.allowForcePush = object.allowForcePush ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BranchAmino): Branch {
    const message = createBaseBranch();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    if (object.allowForcePush !== undefined && object.allowForcePush !== null) {
      message.allowForcePush = object.allowForcePush;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    return message;
  },
  toAmino(message: Branch): BranchAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    obj.allowForcePush = message.allowForcePush === false ? undefined : message.allowForcePush;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BranchAminoMsg): Branch {
    return Branch.fromAmino(object.value);
  },
  fromProtoMsg(message: BranchProtoMsg): Branch {
    return Branch.decode(message.value);
  },
  toProto(message: Branch): Uint8Array {
    return Branch.encode(message).finish();
  },
  toProtoMsg(message: Branch): BranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Branch",
      value: Branch.encode(message).finish()
    };
  }
};