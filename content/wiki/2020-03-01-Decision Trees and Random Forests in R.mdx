---
title: "Decision Trees and Random Forests in R"
category: "Wiki"
date: "2020-03-01"
tags:
    - R
    - Data Science
---

## The Function and the Library



For decision tree, we use `tree()` from `tree` library. For cross validation, we use `cv.tree()`. For random forest, we use `randomForest()` from `randomForest` library. In boosting, we use `gbm()` from `gbm` package.



## Basic Usuage



### Decision Tree



```R
library(tree)
# Same for both classification/regression.
t <- tree(y ~ ., data=data)

# Plotting. Note that `text()` is included
#  because otherwise it will only show splits
plot(t)
text(t, pretty=0)

# CV. We feed `prune.misclass` to indicate we want
#  classification error to guide cross-validation and
#  pruning process instead of deviance which is default.
cv.t <- cv.tree(t, FUN=prune.misclass) 
```





### Bagging and Random Forests



Bagging is just special case in random forests where $m=p$ which is the number of selectable predictors in each split.

```R
library(randomForest)

# Bagging. mtry is p in this case.
bag <- randomForest(y ~ ., data=data,
                    mtry=number of all predictors, 
                    importance=TRUE)

# Random Forest
r <- randomForest(y ~., data=data,
                  mtry=mtry,
                  importance=TRUE)

# Variable importance table
importance(r)

# Plotting variable importance
varImpPlot(r)
```





### Boosting



```R
library(gbm)

# Regression
b <- gbm(y ~., data=data,
         distribution="gaussian",
         n.trees=n.trees,
         shrinkage=0.1, # default value
         interaction.depth=interaction.depth)

# Classification
b <- gbm(y ~., data=data,
         distribution="bernoulli",
         n.trees=n.trees,
         shrinkage=0.1, # default value
         interaction.depth=interaction.depth)

# Partial dependence plot
plot(b, i=predictor)
```

