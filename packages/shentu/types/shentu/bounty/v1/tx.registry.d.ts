import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateProgram, MsgEditProgram, MsgActivateProgram, MsgCloseProgram, MsgSubmitFinding, MsgEditFinding, MsgActivateFinding, MsgConfirmFinding, MsgConfirmFindingPaid, MsgCloseFinding, MsgPublishFinding } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createProgram(value: MsgCreateProgram): {
            typeUrl: string;
            value: Uint8Array;
        };
        editProgram(value: MsgEditProgram): {
            typeUrl: string;
            value: Uint8Array;
        };
        activateProgram(value: MsgActivateProgram): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeProgram(value: MsgCloseProgram): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitFinding(value: MsgSubmitFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
        editFinding(value: MsgEditFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
        activateFinding(value: MsgActivateFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmFinding(value: MsgConfirmFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmFindingPaid(value: MsgConfirmFindingPaid): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeFinding(value: MsgCloseFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
        publishFinding(value: MsgPublishFinding): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createProgram(value: MsgCreateProgram): {
            typeUrl: string;
            value: MsgCreateProgram;
        };
        editProgram(value: MsgEditProgram): {
            typeUrl: string;
            value: MsgEditProgram;
        };
        activateProgram(value: MsgActivateProgram): {
            typeUrl: string;
            value: MsgActivateProgram;
        };
        closeProgram(value: MsgCloseProgram): {
            typeUrl: string;
            value: MsgCloseProgram;
        };
        submitFinding(value: MsgSubmitFinding): {
            typeUrl: string;
            value: MsgSubmitFinding;
        };
        editFinding(value: MsgEditFinding): {
            typeUrl: string;
            value: MsgEditFinding;
        };
        activateFinding(value: MsgActivateFinding): {
            typeUrl: string;
            value: MsgActivateFinding;
        };
        confirmFinding(value: MsgConfirmFinding): {
            typeUrl: string;
            value: MsgConfirmFinding;
        };
        confirmFindingPaid(value: MsgConfirmFindingPaid): {
            typeUrl: string;
            value: MsgConfirmFindingPaid;
        };
        closeFinding(value: MsgCloseFinding): {
            typeUrl: string;
            value: MsgCloseFinding;
        };
        publishFinding(value: MsgPublishFinding): {
            typeUrl: string;
            value: MsgPublishFinding;
        };
    };
    fromJSON: {
        createProgram(value: any): {
            typeUrl: string;
            value: MsgCreateProgram;
        };
        editProgram(value: any): {
            typeUrl: string;
            value: MsgEditProgram;
        };
        activateProgram(value: any): {
            typeUrl: string;
            value: MsgActivateProgram;
        };
        closeProgram(value: any): {
            typeUrl: string;
            value: MsgCloseProgram;
        };
        submitFinding(value: any): {
            typeUrl: string;
            value: MsgSubmitFinding;
        };
        editFinding(value: any): {
            typeUrl: string;
            value: MsgEditFinding;
        };
        activateFinding(value: any): {
            typeUrl: string;
            value: MsgActivateFinding;
        };
        confirmFinding(value: any): {
            typeUrl: string;
            value: MsgConfirmFinding;
        };
        confirmFindingPaid(value: any): {
            typeUrl: string;
            value: MsgConfirmFindingPaid;
        };
        closeFinding(value: any): {
            typeUrl: string;
            value: MsgCloseFinding;
        };
        publishFinding(value: any): {
            typeUrl: string;
            value: MsgPublishFinding;
        };
    };
    fromPartial: {
        createProgram(value: MsgCreateProgram): {
            typeUrl: string;
            value: MsgCreateProgram;
        };
        editProgram(value: MsgEditProgram): {
            typeUrl: string;
            value: MsgEditProgram;
        };
        activateProgram(value: MsgActivateProgram): {
            typeUrl: string;
            value: MsgActivateProgram;
        };
        closeProgram(value: MsgCloseProgram): {
            typeUrl: string;
            value: MsgCloseProgram;
        };
        submitFinding(value: MsgSubmitFinding): {
            typeUrl: string;
            value: MsgSubmitFinding;
        };
        editFinding(value: MsgEditFinding): {
            typeUrl: string;
            value: MsgEditFinding;
        };
        activateFinding(value: MsgActivateFinding): {
            typeUrl: string;
            value: MsgActivateFinding;
        };
        confirmFinding(value: MsgConfirmFinding): {
            typeUrl: string;
            value: MsgConfirmFinding;
        };
        confirmFindingPaid(value: MsgConfirmFindingPaid): {
            typeUrl: string;
            value: MsgConfirmFindingPaid;
        };
        closeFinding(value: MsgCloseFinding): {
            typeUrl: string;
            value: MsgCloseFinding;
        };
        publishFinding(value: MsgPublishFinding): {
            typeUrl: string;
            value: MsgPublishFinding;
        };
    };
};
