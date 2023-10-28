import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  gasPerBlobByte: number;
  govMaxSquareSize: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/celestia.blob.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  gas_per_blob_byte: number;
  gov_max_square_size: string;
}
export interface ParamsAminoMsg {
  type: "/celestia.blob.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  gas_per_blob_byte: number;
  gov_max_square_size: bigint;
}
function createBaseParams(): Params {
  return {
    gasPerBlobByte: 0,
    govMaxSquareSize: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/celestia.blob.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasPerBlobByte !== 0) {
      writer.uint32(8).uint32(message.gasPerBlobByte);
    }
    if (message.govMaxSquareSize !== BigInt(0)) {
      writer.uint32(16).uint64(message.govMaxSquareSize);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      gasPerBlobByte: isSet(object.gasPerBlobByte) ? Number(object.gasPerBlobByte) : 0,
      govMaxSquareSize: isSet(object.govMaxSquareSize) ? BigInt(object.govMaxSquareSize.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gasPerBlobByte = object.gasPerBlobByte ?? 0;
    message.govMaxSquareSize = object.govMaxSquareSize !== undefined && object.govMaxSquareSize !== null ? BigInt(object.govMaxSquareSize.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      gasPerBlobByte: object.gas_per_blob_byte,
      govMaxSquareSize: BigInt(object.gov_max_square_size)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.gas_per_blob_byte = message.gasPerBlobByte;
    obj.gov_max_square_size = message.govMaxSquareSize ? message.govMaxSquareSize.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/celestia.blob.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};