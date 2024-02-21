import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as irishubGuardianTxRegistry from "./guardian/tx.registry";
import * as irishubMintTxRegistry from "./mint/tx.registry";
import * as irishubGuardianTxAmino from "./guardian/tx.amino";
import * as irishubMintTxAmino from "./mint/tx.amino";
export const irishubAminoConverters = {
  ...irishubGuardianTxAmino.AminoConverter,
  ...irishubMintTxAmino.AminoConverter
};
export const irishubProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...irishubGuardianTxRegistry.registry, ...irishubMintTxRegistry.registry];
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
    registry: (registry as any),
    aminoTypes
  });
  return client;
};