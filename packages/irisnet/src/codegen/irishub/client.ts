import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as guardianTxRegistry from "../guardian/tx.registry";
import * as guardianTxAmino from "../guardian/tx.amino";
export const irishubAminoConverters = {
  ...guardianTxAmino.AminoConverter
};
export const irishubProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...guardianTxRegistry.registry];
export const getSigningIrishubClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...irishubProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...irishubAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningIrishubClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningIrishubClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};