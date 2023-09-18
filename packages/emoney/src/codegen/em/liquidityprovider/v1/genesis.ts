import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  accounts: GenesisAcc[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  accounts: GenesisAccAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/em.liquidityprovider.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  accounts: GenesisAccSDKType[];
}
export interface GenesisAcc {
  address: string;
  mintable: Coin[];
}
export interface GenesisAccProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.GenesisAcc";
  value: Uint8Array;
}
export interface GenesisAccAmino {
  address: string;
  mintable: CoinAmino[];
}
export interface GenesisAccAminoMsg {
  type: "/em.liquidityprovider.v1.GenesisAcc";
  value: GenesisAccAmino;
}
export interface GenesisAccSDKType {
  address: string;
  mintable: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: []
  };
}
export const GenesisState = {
  typeUrl: "/em.liquidityprovider.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      GenesisAcc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => GenesisAcc.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => GenesisAcc.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => GenesisAcc.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? GenesisAcc.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
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
      typeUrl: "/em.liquidityprovider.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisAcc(): GenesisAcc {
  return {
    address: "",
    mintable: []
  };
}
export const GenesisAcc = {
  typeUrl: "/em.liquidityprovider.v1.GenesisAcc",
  encode(message: GenesisAcc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisAcc {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisAcc>): GenesisAcc {
    const message = createBaseGenesisAcc();
    message.address = object.address ?? "";
    message.mintable = object.mintable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisAccAmino): GenesisAcc {
    return {
      address: object.address,
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisAcc): GenesisAccAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.mintable) {
      obj.mintable = message.mintable.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.mintable = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisAccAminoMsg): GenesisAcc {
    return GenesisAcc.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisAccProtoMsg): GenesisAcc {
    return GenesisAcc.decode(message.value);
  },
  toProto(message: GenesisAcc): Uint8Array {
    return GenesisAcc.encode(message).finish();
  },
  toProtoMsg(message: GenesisAcc): GenesisAccProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.GenesisAcc",
      value: GenesisAcc.encode(message).finish()
    };
  }
};