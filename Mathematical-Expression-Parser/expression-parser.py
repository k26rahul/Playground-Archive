import re

# Define operator precedence
precedence = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
}


def tokenize(expression):
    # Split the expression into tokens
    return re.findall(r'\d+\.?\d*|[()+\-*/^]|sqrt', expression)


def infix_to_postfix(tokens):
    output = []
    operator_stack = []

    for token in tokens:
        if token.isdigit() or token.replace('.', '', 1).isdigit():
            output.append(token)
        elif token == 'sqrt':
            operator_stack.append(token)
        elif token == '(':
            operator_stack.append(token)
        elif token == ')':
            while operator_stack and operator_stack[-1] != '(':
                output.append(operator_stack.pop())
            operator_stack.pop()  # Pop '('
        else:
            while (operator_stack and
                   operator_stack[-1] != '(' and
                   precedence.get(token, 0) <= precedence.get(operator_stack[-1], 0)):
                output.append(operator_stack.pop())
            operator_stack.append(token)

    while operator_stack:
        output.append(operator_stack.pop())

    return output


def construct_expression(postfix_tokens):
    stack = []

    for token in postfix_tokens:
        if token.isdigit() or token.replace('.', '', 1).isdigit():
            stack.append(f"expression({token})")
        elif token == 'sqrt':
            operand = stack.pop()
            stack.append(f"expression(sqrt({operand}))")
        else:
            right_operand = stack.pop()
            left_operand = stack.pop()
            stack.append(
                f"expression({left_operand}, {token}, {right_operand})")

    return stack[0]


expression_string = "(2+(2-1)/10)*10-1^sqrt(100)"
tokens = tokenize(expression_string)
postfix_tokens = infix_to_postfix(tokens)
result = construct_expression(postfix_tokens)

print(result)
