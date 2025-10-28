import { gql } from '@apollo/client';

// Queries
export const GET_CUSTOMER = gql`
  query GetCustomer {
    customer {
      id
      email
      firstname
      lastname
      middlename
      prefix
      suffix
      date_of_birth
      gender
      is_subscribed
      created_at
      addresses {
        id
        firstname
        lastname
        street
        city
        region {
          region_code
          region
          region_id
        }
        postcode
        country_code
        telephone
        default_shipping
        default_billing
      }
    }
  }
`;

export const IS_EMAIL_AVAILABLE = gql`
  query IsEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`;

// Mutations
export const GENERATE_CUSTOMER_TOKEN = gql`
  mutation GenerateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) {
      customer {
        id
        email
        firstname
        lastname
        middlename
        prefix
        suffix
        date_of_birth
        gender
        is_subscribed
        created_at
      }
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($input: CustomerUpdateInput!) {
    updateCustomerV2(input: $input) {
      customer {
        id
        email
        firstname
        lastname
        middlename
        prefix
        suffix
        date_of_birth
        gender
        is_subscribed
        created_at
      }
    }
  }
`;

export const REVOKE_CUSTOMER_TOKEN = gql`
  mutation RevokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`;

export const REQUEST_PASSWORD_RESET_EMAIL = gql`
  mutation RequestPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(email: $email)
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword(
    $email: String!
    $resetPasswordToken: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      resetPasswordToken: $resetPasswordToken
      newPassword: $newPassword
    )
  }
`;

export const CREATE_CUSTOMER_ADDRESS = gql`
  mutation CreateCustomerAddress($input: CustomerAddressInput!) {
    createCustomerAddress(input: $input) {
      id
      firstname
      lastname
      street
      city
      region {
        region_code
        region
        region_id
      }
      postcode
      country_code
      telephone
      default_shipping
      default_billing
    }
  }
`;

export const UPDATE_CUSTOMER_ADDRESS = gql`
  mutation UpdateCustomerAddress(
    $id: Int!
    $input: CustomerAddressInput!
  ) {
    updateCustomerAddress(id: $id, input: $input) {
      id
      firstname
      lastname
      street
      city
      region {
        region_code
        region
        region_id
      }
      postcode
      country_code
      telephone
      default_shipping
      default_billing
    }
  }
`;

export const DELETE_CUSTOMER_ADDRESS = gql`
  mutation DeleteCustomerAddress($id: Int!) {
    deleteCustomerAddress(id: $id)
  }
`;
