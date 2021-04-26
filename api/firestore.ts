const { Firestore } = require('@google-cloud/firestore');
const fs = require('path');

let firestore = null;
export function getFireStoreDB() {
  if (!firestore) {
    let buff = Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64');
    let { client_email, private_key, project_id: projectId } = JSON.parse(buff.toString('ascii'));
    firestore = new Firestore({
      projectId,
      client_email,
      private_key,
      ignoreUndefinedProperties: true,
    });
  }
  return firestore;
}
