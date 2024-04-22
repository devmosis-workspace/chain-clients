import { Lien, LienAmino, LienSDKType } from "./lien";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  liens: AccountLien[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/agoric.lien.GenesisState";
  value: Uint8Array;
}
/** The initial or exported state. */
export interface GenesisStateAmino {
  liens?: AccountLienAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/agoric.lien.GenesisState";
  value: GenesisStateAmino;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
  liens: AccountLienSDKType[];
}
/** The lien on a particular account */
export interface AccountLien {
  /** Account address, bech32-encoded. */
  address: string;
  /** The liened amount. Should be nonzero. */
  lien?: Lien;
}
export interface AccountLienProtoMsg {
  typeUrl: "/agoric.lien.AccountLien";
  value: Uint8Array;
}
/** The lien on a particular account */
export interface AccountLienAmino {
  /** Account address, bech32-encoded. */
  address?: string;
  /** The liened amount. Should be nonzero. */
  lien?: LienAmino;
}
export interface AccountLienAminoMsg {
  type: "/agoric.lien.AccountLien";
  value: AccountLienAmino;
}
/** The lien on a particular account */
export interface AccountLienSDKType {
  address: string;
  lien?: LienSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    liens: []
  };
}
export const GenesisState = {
  typeUrl: "/agoric.lien.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liens) {
      AccountLien.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      liens: Array.isArray(object?.liens) ? object.liens.map((e: any) => AccountLien.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.liens = object.liens?.map(e => AccountLien.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.liens = object.liens?.map(e => AccountLien.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.liens) {
      obj.liens = message.liens.map(e => e ? AccountLien.toAmino(e) : undefined);
    } else {
      obj.liens = [];
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
      typeUrl: "/agoric.lien.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseAccountLien(): AccountLien {
  return {
    address: "",
    lien: undefined
  };
}
export const AccountLien = {
  typeUrl: "/agoric.lien.AccountLien",
  encode(message: AccountLien, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.lien !== undefined) {
      Lien.encode(message.lien, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLien {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      lien: isSet(object.lien) ? Lien.fromJSON(object.lien) : undefined
    };
  },
  fromPartial(object: Partial<AccountLien>): AccountLien {
    const message = createBaseAccountLien();
    message.address = object.address ?? "";
    message.lien = object.lien !== undefined && object.lien !== null ? Lien.fromPartial(object.lien) : undefined;
    return message;
  },
  fromAmino(object: AccountLienAmino): AccountLien {
    const message = createBaseAccountLien();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.lien !== undefined && object.lien !== null) {
      message.lien = Lien.fromAmino(object.lien);
    }
    return message;
  },
  toAmino(message: AccountLien): AccountLienAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.lien = message.lien ? Lien.toAmino(message.lien) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountLienAminoMsg): AccountLien {
    return AccountLien.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountLienProtoMsg): AccountLien {
    return AccountLien.decode(message.value);
  },
  toProto(message: AccountLien): Uint8Array {
    return AccountLien.encode(message).finish();
  },
  toProtoMsg(message: AccountLien): AccountLienProtoMsg {
    return {
      typeUrl: "/agoric.lien.AccountLien",
      value: AccountLien.encode(message).finish()
    };
  }
};