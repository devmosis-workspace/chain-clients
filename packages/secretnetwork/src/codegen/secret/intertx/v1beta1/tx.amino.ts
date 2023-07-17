import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface MsgRegisterAccountAminoType extends AminoMsg {
  type: "/secret.intertx.v1beta1.MsgRegisterAccount";
  value: {
    owner: string;
    connection_id: string;
    version: string;
  };
}
export interface MsgSubmitTxAminoType extends AminoMsg {
  type: "/secret.intertx.v1beta1.MsgSubmitTx";
  value: {
    owner: Uint8Array;
    connection_id: string;
    msg: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export const AminoConverter = {
  "/secret.intertx.v1beta1.MsgRegisterAccount": {
    aminoType: "/secret.intertx.v1beta1.MsgRegisterAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterAccount): MsgRegisterAccountAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      version
    }: MsgRegisterAccountAminoType["value"]): MsgRegisterAccount => {
      return {
        owner,
        connectionId: connection_id,
        version
      };
    }
  },
  "/secret.intertx.v1beta1.MsgSubmitTx": {
    aminoType: "/secret.intertx.v1beta1.MsgSubmitTx",
    toAmino: ({
      owner,
      connectionId,
      msg
    }: MsgSubmitTx): MsgSubmitTxAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        msg: {
          type_url: msg.typeUrl,
          value: msg.value
        }
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      msg
    }: MsgSubmitTxAminoType["value"]): MsgSubmitTx => {
      return {
        owner,
        connectionId: connection_id,
        msg: {
          typeUrl: msg.type_url,
          value: msg.value
        }
      };
    }
  }
};