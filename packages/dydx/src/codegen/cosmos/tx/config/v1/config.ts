import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** Config is the config object of the x/auth/tx package. */
export interface Config {
  /**
   * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skipAnteHandler: boolean;
  /**
   * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skipPostHandler: boolean;
}
export interface ConfigProtoMsg {
  typeUrl: "/cosmos.tx.config.v1.Config";
  value: Uint8Array;
}
/** Config is the config object of the x/auth/tx package. */
export interface ConfigSDKType {
  skip_ante_handler: boolean;
  skip_post_handler: boolean;
}
function createBaseConfig(): Config {
  return {
    skipAnteHandler: false,
    skipPostHandler: false
  };
}
export const Config = {
  typeUrl: "/cosmos.tx.config.v1.Config",
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.skipAnteHandler === true) {
      writer.uint32(8).bool(message.skipAnteHandler);
    }
    if (message.skipPostHandler === true) {
      writer.uint32(16).bool(message.skipPostHandler);
    }
    return writer;
  },
  fromJSON(object: any): Config {
    return {
      skipAnteHandler: isSet(object.skipAnteHandler) ? Boolean(object.skipAnteHandler) : false,
      skipPostHandler: isSet(object.skipPostHandler) ? Boolean(object.skipPostHandler) : false
    };
  },
  fromPartial(object: Partial<Config>): Config {
    const message = createBaseConfig();
    message.skipAnteHandler = object.skipAnteHandler ?? false;
    message.skipPostHandler = object.skipPostHandler ?? false;
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    if (object.skip_ante_handler !== undefined && object.skip_ante_handler !== null) {
      message.skipAnteHandler = object.skip_ante_handler;
    }
    if (object.skip_post_handler !== undefined && object.skip_post_handler !== null) {
      message.skipPostHandler = object.skip_post_handler;
    }
    return message;
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    obj.skip_ante_handler = message.skipAnteHandler;
    obj.skip_post_handler = message.skipPostHandler;
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message: Config): ConfigAminoMsg {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/cosmos.tx.config.v1.Config",
      value: Config.encode(message).finish()
    };
  }
};