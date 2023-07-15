import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
  /** user account address */
  address: string;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestSDKType {
  address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
  preferences: ValidatorPreference[];
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseSDKType {
  preferences: ValidatorPreferenceSDKType[];
}
function createBaseUserValidatorPreferencesRequest(): UserValidatorPreferencesRequest {
  return {
    address: ""
  };
}
export const UserValidatorPreferencesRequest = {
  encode(message: UserValidatorPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): UserValidatorPreferencesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest {
    const message = createBaseUserValidatorPreferencesRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseUserValidatorPreferencesResponse(): UserValidatorPreferencesResponse {
  return {
    preferences: []
  };
}
export const UserValidatorPreferencesResponse = {
  encode(message: UserValidatorPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UserValidatorPreferencesResponse {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse {
    const message = createBaseUserValidatorPreferencesResponse();
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  }
};