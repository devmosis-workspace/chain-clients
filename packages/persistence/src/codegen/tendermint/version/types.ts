import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol: Long;
  software: string;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
  protocol: Long;
  software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: Long;
  app: Long;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
  block: Long;
  app: Long;
}
function createBaseApp(): App {
  return {
    protocol: Long.UZERO,
    software: ""
  };
}
export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.protocol.isZero()) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  fromJSON(object: any): App {
    return {
      protocol: isSet(object.protocol) ? Long.fromValue(object.protocol) : Long.UZERO,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  fromPartial(object: Partial<App>): App {
    const message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? Long.fromValue(object.protocol) : Long.UZERO;
    message.software = object.software ?? "";
    return message;
  }
};
function createBaseConsensus(): Consensus {
  return {
    block: Long.UZERO,
    app: Long.UZERO
  };
}
export const Consensus = {
  encode(message: Consensus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  fromJSON(object: any): Consensus {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Consensus>): Consensus {
    const message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }
};