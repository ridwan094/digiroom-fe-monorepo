export const azurePublicUrlPreFix =
  'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001';

export function getAzurePublicUrl(file) {
  return azurePublicUrlPreFix + '/' + file.name;
}