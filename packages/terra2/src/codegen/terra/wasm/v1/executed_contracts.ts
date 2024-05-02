import { BinaryWriter } from "../../../binary";
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContracts {
  contractAddresses: string[];
}
export interface ExecutedContractsProtoMsg {
  typeUrl: "/terra.wasm.v1.ExecutedContracts";
  value: Uint8Array;
}
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContractsAmino {
  contract_addresses?: string[];
}
export interface ExecutedContractsAminoMsg {
  type: "/terra.wasm.v1.ExecutedContracts";
  value: ExecutedContractsAmino;
}
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContractsSDKType {
  contract_addresses: string[];
}
function createBaseExecutedContracts(): ExecutedContracts {
  return {
    contractAddresses: []
  };
}
export const ExecutedContracts = {
  typeUrl: "/terra.wasm.v1.ExecutedContracts",
  encode(message: ExecutedContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ExecutedContracts {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ExecutedContracts>): ExecutedContracts {
    const message = createBaseExecutedContracts();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ExecutedContractsAmino): ExecutedContracts {
    const message = createBaseExecutedContracts();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ExecutedContracts): ExecutedContractsAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ExecutedContractsAminoMsg): ExecutedContracts {
    return ExecutedContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutedContractsProtoMsg): ExecutedContracts {
    return ExecutedContracts.decode(message.value);
  },
  toProto(message: ExecutedContracts): Uint8Array {
    return ExecutedContracts.encode(message).finish();
  },
  toProtoMsg(message: ExecutedContracts): ExecutedContractsProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1.ExecutedContracts",
      value: ExecutedContracts.encode(message).finish()
    };
  }
};