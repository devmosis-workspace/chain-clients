import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../../helpers";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  appAcknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forwardRelayerAddress: string;
  /** success flag of the base application callback */
  underlyingAppSuccess: boolean;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgementSDKType {
  app_acknowledgement: Uint8Array;
  forward_relayer_address: string;
  underlying_app_success: boolean;
}
function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return {
    appAcknowledgement: new Uint8Array(),
    forwardRelayerAddress: "",
    underlyingAppSuccess: false
  };
}
export const IncentivizedAcknowledgement = {
  encode(message: IncentivizedAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appAcknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.appAcknowledgement);
    }
    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }
    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }
    return writer;
  },
  fromJSON(object: any): IncentivizedAcknowledgement {
    return {
      appAcknowledgement: isSet(object.appAcknowledgement) ? bytesFromBase64(object.appAcknowledgement) : new Uint8Array(),
      forwardRelayerAddress: isSet(object.forwardRelayerAddress) ? String(object.forwardRelayerAddress) : "",
      underlyingAppSuccess: isSet(object.underlyingAppSuccess) ? Boolean(object.underlyingAppSuccess) : false
    };
  },
  fromPartial(object: Partial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
    return message;
  }
};