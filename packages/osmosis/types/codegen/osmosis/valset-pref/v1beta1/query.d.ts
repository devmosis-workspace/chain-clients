import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
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
export declare const UserValidatorPreferencesRequest: {
    encode(message: UserValidatorPreferencesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserValidatorPreferencesRequest;
    fromPartial(object: Partial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest;
};
export declare const UserValidatorPreferencesResponse: {
    encode(message: UserValidatorPreferencesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserValidatorPreferencesResponse;
    fromPartial(object: Partial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse;
};
