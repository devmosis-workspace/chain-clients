import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface MsgRegisterAccountAminoType extends AminoMsg {
  type: "/chainmain.icaauth.v1.MsgRegisterAccount";
  value: {
    owner: string;
    connectionId: string;
    version: string;
  };
}
export interface MsgSubmitTxAminoType extends AminoMsg {
  type: "/chainmain.icaauth.v1.MsgSubmitTx";
  value: {
    owner: string;
    connectionId: string;
    msgs: {
      type_url: string;
      value: Uint8Array;
    }[];
    timeoutDuration: {
      seconds: string;
      nanos: number;
    };
  };
}
export const AminoConverter = {
  "/chainmain.icaauth.v1.MsgRegisterAccount": {
    aminoType: "/chainmain.icaauth.v1.MsgRegisterAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterAccount): MsgRegisterAccountAminoType["value"] => {
      return {
        owner,
        connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterAccountAminoType["value"]): MsgRegisterAccount => {
      return {
        owner,
        connectionId,
        version
      };
    }
  },
  "/chainmain.icaauth.v1.MsgSubmitTx": {
    aminoType: "/chainmain.icaauth.v1.MsgSubmitTx",
    toAmino: ({
      owner,
      connectionId,
      msgs,
      timeoutDuration
    }: MsgSubmitTx): MsgSubmitTxAminoType["value"] => {
      return {
        owner,
        connectionId,
        msgs: msgs.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        timeoutDuration: (timeoutDuration * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      owner,
      connectionId,
      msgs,
      timeoutDuration
    }: MsgSubmitTxAminoType["value"]): MsgSubmitTx => {
      return {
        owner,
        connectionId,
        msgs: msgs.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        timeoutDuration: {
          seconds: Long.fromNumber(Math.floor(parseInt(timeoutDuration) / 1_000_000_000)),
          nanos: parseInt(timeoutDuration) % 1_000_000_000
        }
      };
    }
  }
};