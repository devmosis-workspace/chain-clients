import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsSDKType } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Record is used for representing a key in the keyring. */
export interface Record {
  /** name represents a name of Record */
  name: string;
  /** pub_key represents a public key in any format */
  pubKey?: Any;
  /** local stores the private key locally. */
  local?: Record_Local;
  /** ledger stores the information about a Ledger key. */
  ledger?: Record_Ledger;
  /** Multi does not store any other information. */
  multi?: Record_Multi;
  /** Offline does not store any other information. */
  offline?: Record_Offline;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
  name: string;
  pub_key?: AnySDKType;
  local?: Record_LocalSDKType;
  ledger?: Record_LedgerSDKType;
  multi?: Record_MultiSDKType;
  offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
  privKey?: Any;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
  priv_key?: AnySDKType;
}
/** Ledger item */
export interface Record_Ledger {
  path?: BIP44Params;
}
/** Ledger item */
export interface Record_LedgerSDKType {
  path?: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {}
/** Multi item */
export interface Record_MultiSDKType {}
/** Offline item */
export interface Record_Offline {}
/** Offline item */
export interface Record_OfflineSDKType {}
function createBaseRecord(): Record {
  return {
    name: "",
    pubKey: undefined,
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined
  };
}
export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Record {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      local: isSet(object.local) ? Record_Local.fromJSON(object.local) : undefined,
      ledger: isSet(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
      multi: isSet(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
      offline: isSet(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined
    };
  },
  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.name = object.name ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
    message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
    message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
    return message;
  }
};
function createBaseRecord_Local(): Record_Local {
  return {
    privKey: undefined
  };
}
export const Record_Local = {
  encode(message: Record_Local, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Record_Local {
    return {
      privKey: isSet(object.privKey) ? Any.fromJSON(object.privKey) : undefined
    };
  },
  fromPartial(object: Partial<Record_Local>): Record_Local {
    const message = createBaseRecord_Local();
    message.privKey = object.privKey !== undefined && object.privKey !== null ? Any.fromPartial(object.privKey) : undefined;
    return message;
  }
};
function createBaseRecord_Ledger(): Record_Ledger {
  return {
    path: undefined
  };
}
export const Record_Ledger = {
  encode(message: Record_Ledger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Record_Ledger {
    return {
      path: isSet(object.path) ? BIP44Params.fromJSON(object.path) : undefined
    };
  },
  fromPartial(object: Partial<Record_Ledger>): Record_Ledger {
    const message = createBaseRecord_Ledger();
    message.path = object.path !== undefined && object.path !== null ? BIP44Params.fromPartial(object.path) : undefined;
    return message;
  }
};
function createBaseRecord_Multi(): Record_Multi {
  return {};
}
export const Record_Multi = {
  encode(_: Record_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): Record_Multi {
    return {};
  },
  fromPartial(_: Partial<Record_Multi>): Record_Multi {
    const message = createBaseRecord_Multi();
    return message;
  }
};
function createBaseRecord_Offline(): Record_Offline {
  return {};
}
export const Record_Offline = {
  encode(_: Record_Offline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): Record_Offline {
    return {};
  },
  fromPartial(_: Partial<Record_Offline>): Record_Offline {
    const message = createBaseRecord_Offline();
    return message;
  }
};