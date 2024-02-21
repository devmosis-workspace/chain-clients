import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol: bigint;
  software: string;
}
export interface AppProtoMsg {
  typeUrl: "/tendermint.version.App";
  value: Uint8Array;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
  protocol: bigint;
  software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: bigint;
  app: bigint;
}
export interface ConsensusProtoMsg {
  typeUrl: "/tendermint.version.Consensus";
  value: Uint8Array;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
  block: bigint;
  app: bigint;
}
function createBaseApp(): App {
  return {
    protocol: BigInt(0),
    software: ""
  };
}
export const App = {
  typeUrl: "/tendermint.version.App",
  encode(message: App, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  fromJSON(object: any): App {
    return {
      protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt(0),
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  fromPartial(object: Partial<App>): App {
    const message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
    message.software = object.software ?? "";
    return message;
  },
  fromAmino(object: AppAmino): App {
    const message = createBaseApp();
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = BigInt(object.protocol);
    }
    if (object.software !== undefined && object.software !== null) {
      message.software = object.software;
    }
    return message;
  },
  toAmino(message: App): AppAmino {
    const obj: any = {};
    obj.protocol = message.protocol ? message.protocol.toString() : undefined;
    obj.software = message.software;
    return obj;
  },
  fromAminoMsg(object: AppAminoMsg): App {
    return App.fromAmino(object.value);
  },
  fromProtoMsg(message: AppProtoMsg): App {
    return App.decode(message.value);
  },
  toProto(message: App): Uint8Array {
    return App.encode(message).finish();
  },
  toProtoMsg(message: App): AppProtoMsg {
    return {
      typeUrl: "/tendermint.version.App",
      value: App.encode(message).finish()
    };
  }
};
function createBaseConsensus(): Consensus {
  return {
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const Consensus = {
  typeUrl: "/tendermint.version.Consensus",
  encode(message: Consensus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  fromJSON(object: any): Consensus {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Consensus>): Consensus {
    const message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConsensusAmino): Consensus {
    const message = createBaseConsensus();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message: Consensus): ConsensusAmino {
    const obj: any = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusAminoMsg): Consensus {
    return Consensus.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsensusProtoMsg): Consensus {
    return Consensus.decode(message.value);
  },
  toProto(message: Consensus): Uint8Array {
    return Consensus.encode(message).finish();
  },
  toProtoMsg(message: Consensus): ConsensusProtoMsg {
    return {
      typeUrl: "/tendermint.version.Consensus",
      value: Consensus.encode(message).finish()
    };
  }
};