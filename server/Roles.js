/****
    *
    *Adding users to roles here..
    *we will be creating a ice gui for this at one point...
    *
    ****/
//Roles
/*
Roles.createRole('druidae');//Super adim user type
Roles.createRole('amadan');//Admin user type
Roles.createRole('abhar');//Editors user type
Roles.createRole('champion');//Contribuitor user type
Roles.createRole('heros');//'Made men' user type
Roles.createRole('member');//User user type
*/

//Super adim users
var SuperAdminUsers = [
  {_id: 'TPHC76qLW9w9agoyv'},
  {_id: 'xNYQkYJdkLYQPeNzE'}

];
Roles.addUsersToRoles(
  SuperAdminUsers,
  ['druidae']
);
//Admin users
var AdminUsers = [
  {_id: 'JYvQiEanr2XYQCZeB'}
];
Roles.addUsersToRoles(
  AdminUsers,
  ['amadan']
);
//Editors users
var EditorsUsers = [
  {_id: ''}
];
Roles.addUsersToRoles(
  EditorsUsers,
  ['abhar']
);
//Contribuitor users
var ContribuitorUsers = [
  {_id: ''}
];
Roles.addUsersToRoles(
  ContribuitorUsers,
  ['champion']
);
//'Made men' users
var HerosUsers = [
  {_id: ''}
];
Roles.addUsersToRoles(
  HerosUsers,
  ['heros']
);
//User users
var MemberUsers = [
  {_id: ''}
];
Roles.addUsersToRoles(
  MemberUsers,
  ['member']
);
