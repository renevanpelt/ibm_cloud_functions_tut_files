/*
 * IBM Bluemix Cloud Action Name: hello_world
 */

function main(params) {
  const name = params.name || "world";
  return {payload: 'Hello ' + name};
}
